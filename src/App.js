import { Home } from "./Components/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout";
import SignIn from "./Components/Pages/SignIn";


import StudentDashboard from "./Components/Pages/Student/StudentDashboard";
import { StudentSelect } from "./Components/Pages/Student/StudentSelect";
import StaffDashboard from "./Components/Pages/AcaStaff/StaffDash";
import AdminDashboard from "./Components/Pages/Admin/AdminDash";
import OfficeClerkDashboard from "./Components/Pages/OfficeClerk/OfficeClerkDashboard";

import LabTechDash2 from "./Components/Pages/LabTechnician/LabTechDash2";

import { StaffProfile } from "./Components/Pages/AcaStaff/StaffProfile";

import { OfficeClerkProfile } from "./Components/Pages/OfficeClerk/OfficeClerkProfile";

import { UserProfiles } from "./Components/Pages/Admin/UserProfileView";
import { ViewLabs } from "./Components/Pages/Admin/ViewLabs";
import SendRequest from "./Components/Pages/SendRequest";

import TechnicianReq from "./Components/Pages/LabTechnician/TechnicianReq";
import Profile from "./Components/Pages/Profile";
import AuthCallback from "./Components/Pages/AuthCallback";
import { SamplePage } from "./Components/Pages/SamplePage";
import { ClerkEquipment } from "./Components/Pages/OfficeClerk/ClerkEquipment";
import { ViewClerkLabs } from "./Components/Pages/OfficeClerk/ViewClerkLabs";
import { ClerkItems } from "./Components/Pages/OfficeClerk/ClerkItems";
import PendingMaintain from "./Components/Pages/OfficeClerk/PendingMaintain";
import OngoingMaintain from "./Components/Pages/OfficeClerk/OngoingMaintain";
import CompletedMaintain from "./Components/Pages/OfficeClerk/CompletedMaintain";
import StudentEquipment from "./Components/Pages/Student/StudentEquipment";
import Assigned from "./Components/Pages/LabTechnician/Assigned";
import { Completed } from "./Components/Pages/LabTechnician/Completed";
import StudentReservations from "./Components/Pages/Student/StudentReservations";
import StudentBorrowed from "./Components/Pages/Student/StudentBorrowed";
import ClerkReserve from "./Components/Pages/OfficeClerk/ClerkReserve";
import ClerkViewReserved from "./Components/Pages/OfficeClerk/ClerkViewReserved";
import ClerkRequest from "./Components/Pages/OfficeClerk/ClerkRequest";
import AdminAnalytics from "./Components/Pages/Admin/AdminAnalytics";
import ClerkBorrowed from "./Components/Pages/OfficeClerk/ClerkBorrowed";
import StaffBorrowed from "./Components/Pages/AcaStaff/StaffBorrowed";
import StaffReservations from "./Components/Pages/AcaStaff/StaffReservation";
import { StaffSelect } from "./Components/Pages/AcaStaff/StaffSelect";
import StaffEquipment from "./Components/Pages/AcaStaff/StaffEquipment";
import Ongoing from "./Components/Pages/LabTechnician/Ongoing";
import { TechnicianLabs } from "./Components/Pages/LabTechnician/TechnicianLabs";
import LabTechEquipment from "./Components/Pages/LabTechnician/LabTechEquipment";
import LabTechItems from "./Components/Pages/LabTechnician/LabTechItems";

import {ProtectedRoute} from "./Components/ProtectedRoute"
import { AuthProvider } from "./Components/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />

            {/* Protected Routes */}
            <Route path="/student" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
            <Route path="/student-select" element={<ProtectedRoute><StudentSelect /></ProtectedRoute>} />
            <Route path="/student-equipment" element={<ProtectedRoute><StudentEquipment /></ProtectedRoute>} />
            <Route path="/student-reservation" element={<ProtectedRoute><StudentReservations /></ProtectedRoute>} />
            <Route path="/student-borrowed" element={<ProtectedRoute><StudentBorrowed /></ProtectedRoute>} />
            <Route path="/labTechnician2" element={<ProtectedRoute><LabTechDash2 /></ProtectedRoute>} />
            <Route path="/labs-tech" element={<ProtectedRoute><TechnicianLabs /></ProtectedRoute>} />
            <Route path="/items-tech" element={<ProtectedRoute><LabTechItems /></ProtectedRoute>} />
            <Route path="/labtech-equipment" element={<ProtectedRoute><LabTechEquipment /></ProtectedRoute>} />
            <Route path="/tech/ongoing" element={<ProtectedRoute><Ongoing /></ProtectedRoute>} />

            <Route path="/staff" element={<ProtectedRoute><StaffDashboard /></ProtectedRoute>} />
            <Route path="/staff-borrowed" element={<ProtectedRoute><StaffBorrowed /></ProtectedRoute>} />
            <Route path="/staff-select" element={<ProtectedRoute><StaffSelect /></ProtectedRoute>} />
            <Route path="/staff-equipment" element={<ProtectedRoute><StaffEquipment /></ProtectedRoute>} />
            <Route path="/staff-reservation" element={<ProtectedRoute><StaffReservations /></ProtectedRoute>} />

            <Route path="/officeclerk" element={<ProtectedRoute><OfficeClerkDashboard /></ProtectedRoute>} />
            <Route path="/staff-profile" element={<ProtectedRoute><StaffProfile /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin-analytics" element={<ProtectedRoute><AdminAnalytics /></ProtectedRoute>} />
            <Route path="/officeclerk-profile" element={<ProtectedRoute><OfficeClerkProfile /></ProtectedRoute>} />
            <Route path="/user-profiles" element={<ProtectedRoute><UserProfiles /></ProtectedRoute>} />
            <Route path="/view-labs" element={<ProtectedRoute><ViewLabs /></ProtectedRoute>} />
            <Route path="/request" element={<ProtectedRoute><SendRequest /></ProtectedRoute>} />
            <Route path="/techreq" element={<ProtectedRoute><TechnicianReq /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/callback" element={<AuthCallback />} />
            <Route path="/loading" element={<SamplePage />} />

            {/* Office Clerk Routes */}
            <Route path="/clerk-equipment" element={<ProtectedRoute><ClerkEquipment /></ProtectedRoute>} />
            <Route path="/clerk-labs" element={<ProtectedRoute><ViewClerkLabs /></ProtectedRoute>} />
            <Route path="/clerk-items" element={<ProtectedRoute><ClerkItems /></ProtectedRoute>} />
            <Route path="/clerk-maintenance" element={<ProtectedRoute><PendingMaintain /></ProtectedRoute>} />
            <Route path="/clerk-maintenance/ongoing" element={<ProtectedRoute><OngoingMaintain /></ProtectedRoute>} />
            <Route path="/clerk-maintenance/completed" element={<ProtectedRoute><CompletedMaintain /></ProtectedRoute>} />
            <Route path="/clerk-reserve" element={<ProtectedRoute><ClerkReserve /></ProtectedRoute>} />
            <Route path="/clerk-reserve-view" element={<ProtectedRoute><ClerkViewReserved /></ProtectedRoute>} />
            <Route path="/clerk-request" element={<ProtectedRoute><ClerkRequest /></ProtectedRoute>} />
            <Route path="/clerk-borrowed" element={<ProtectedRoute><ClerkBorrowed /></ProtectedRoute>} />

            {/* Lab Technician Routes */}
            <Route path="/tech" element={<ProtectedRoute><Assigned /></ProtectedRoute>} />
            <Route path="/tech/completed" element={<ProtectedRoute><Completed /></ProtectedRoute>} />
          </Route>
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
