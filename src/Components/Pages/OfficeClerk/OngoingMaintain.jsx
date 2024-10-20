import React, { useState, useEffect } from "react";
import axios from "axios";

const OngoingMaintain = () => {
  const [ongoingMaintenance, setOngoingMaintenance] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Form Input States
  const [labName, setLabName] = useState("");
  const [labs, setLabs] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState("");

  const [selectedItem, setSelectedItem] = useState("");

  const [selectedLab, setSelectedLab] = useState("");
  const [technicians, setTechnicians] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState(null); // Track selected technician

  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchLabs = async () => {
    try {
      const response = await axios.get("https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/labs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setLabs(response.data);
    } catch (error) {
      console.error("Error fetching labs", error);
      setError("Failed to fetch labs.");
    }
  };

  const fetchEquipment = async (labId) => {
    setError(null);
    try {
      const response = await axios.get(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/equipments?labId=${labId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setEquipment(response.data);
    } catch (error) {
      console.error("Error fetching equipment", error);
      setError("Failed to fetch equipment.");
    }
  };

  const fetchItems = async (equipmentId) => {
    try {
      const response = await axios.get(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/items?equipmentId=${equipmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
      setError("Failed to fetch items.");
    }
  };
  const fetchItem = async (itemId) => {
    try {
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/equipments?itemId=${itemId}`, // Ensure proper usage of itemId
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
      setError("Failed to fetch items.");
    }
  };

  const fetchTechnicians = async () => {
    try {
      const response = await axios.get(
        "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/technicians",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setTechnicians(response.data);
    } catch (error) {
      console.error("Error fetching technicians", error);
      setError("Failed to fetch technicians.");
    }
  };

  const fetchOngoingMaintain = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(
        "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/maintenance?completed=false",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setOngoingMaintenance(response.data);
    } catch (error) {
      console.error("Error when fetching ongoing maintenance items", error);
      setError("Failed to load ongoing maintenance items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOngoingMaintain();
    fetchLabs();
    fetchTechnicians();
  }, []);

  const handleEquipmentChange = (e) => {
    const equipmentId = e.target.value;
    setSelectedEquipment(equipmentId);
    fetchItems(equipmentId);
  };

  const handleItemChange = (e) => {
    const itemId = e.target.value;
    setItemId(itemId);
    const selectednewItem = items.find((item) => item.itemId === Number(itemId));
    console.log("selected item:", selectednewItem);

    fetchItem(itemId);
  };

  const handleTechnicianChange = (e) => {
    const userId = e.target.value;
    const selectedTech = technicians.find((technician) => technician.userId === Number(userId));
    setSelectedTechnician(selectedTech); // Set selected technician properly
  };

  const handleLabChange = (e) => {
    const labId = e.target.value;
    const selectedLab = labs.find((lab) => lab.labId === Number(labId));
    setSelectedLab(selectedLab);
    setLabName(labId);
    fetchEquipment(labId);
  };

  const handleCreateNewMaintenance = async (e) => {
    e.preventDefault();

    const formatDate = (date) => new Date(date).toISOString().split("T")[0]; // Formats to 'YYYY-MM-DD'

    const newMaintenance = {
      itemId: selectedItem.itemId,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      technicianId: selectedTechnician.userId,
      taskDescription: taskDescription,
    };

    try {
      console.log("maintenance req:", newMaintenance);
      const response = await axios.post(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/maintenance",
        newMaintenance,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        },
      );
      setShowCreateForm(false);
      fetchOngoingMaintain();
    } catch (error) {
      if (error.response) {
        console.error("Server responded with error:", error.response.data);
        console.error("Validation errors:", error.response.data.errors);
        setError(error.response.data.message || "Failed to create new maintenance.");
      } else {
        console.error("Error creating new maintenance", error);
        setError("Failed to create new maintenance.");
      }
    }
  };

  return (
    <div className="h-svh w-full bg-[#202652] flex flex-col items-center justify-center p-10">
      {loading && (
        <div className="flex flex-col justify-center items-center">
          <span className="loading loading-spinner text-info w-12 h-12"></span>
          <p className="text-[30px] font-semibold text-white p-2">Loading</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}

      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setShowCreateForm(!showCreateForm)}
      >
        {showCreateForm ? "Cancel New Maintenance" : "Create New Maintenance"}
      </button>

      {showCreateForm && (
        <form className="bg-white p-6 rounded-md w-full max-w-lg" onSubmit={handleCreateNewMaintenance}>
          <div className="mb-4">
            <label className="block text-gray-700">Lab Name</label>
            <select className="w-full border p-2" value={labName} onChange={handleLabChange}>
              <option value="">Select Lab</option>
              {labs.map((lab) => (
                <option key={lab.labId} value={lab.labId}>
                  {lab.labName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white">Equipment</label>
            <select
              className="w-full border p-2"
              value={selectedEquipment}
              onChange={handleEquipmentChange}
              disabled={!labName}
            >
              <option value="">Select Equipment</option>
              {equipment.map((equip) => (
                <option key={equip.equipmentId} value={equip.equipmentId}>
                  {equip.name}
                  {console.log("equipment", equip)}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Serial Number</label>
            <select
              className="w-full border p-2"
              value={selectedItem?.itemId || ""}
              onChange={handleItemChange}
              disabled={!selectedEquipment}
            >
              <option value="">Select Item</option>
              {items.map((item) => (
                <option key={item.itemId} value={item.itemId}>
                  {item.serialNumber}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Technician</label>
            <select
              className="w-full border p-2"
              value={selectedTechnician?.userId || ""}
              onChange={handleTechnicianChange}
            >
              <option value="">Select Technician</option>
              {technicians.map((technician) => (
                <option key={technician.userId} value={technician.userId}>
                  {technician.firstName} {technician.lastName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Task Description</label>
            <textarea
              className="w-full border p-2"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              className="w-full border p-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              className="w-full border p-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default OngoingMaintain;
