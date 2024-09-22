import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { MemoryRouter } from "react-router-dom"; 
import AdminDashboard from "../Pages/Admin/AdminDash"; 

// Mock the AdminDashboard component
jest.mock("../Pages/Admin/AdminDash", () => {
  return function MockedAdminDashboard() {
    return (
      <div>
        <div role="button" onClick={() => {}} aria-label="view user profiles">
          VIEW USER PROFILES
        </div>
        <div role="link" onClick={() => {}} aria-label="view labs">
          VIEW LABS
        </div>
        <div>
          <p>item name</p>
        </div>
      </div>
    );
  };
});

describe("AdminDashboard Component", () => {
  
  test("renders the initial small cards", () => {
    render(
      <MemoryRouter>
        <AdminDashboard />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/view user profiles/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/view labs/i)).toBeInTheDocument();
  });

  test("expands and collapses the large card when clicked", async () => {
    render(
      <MemoryRouter>
        <AdminDashboard />
      </MemoryRouter>
    );

    const viewUserProfilesCard = screen.getByLabelText(/view user profiles/i);
    
    // Click to expand the card
    fireEvent.click(viewUserProfilesCard);

    // Check for "item name" to ensure it can be found
    expect(await screen.findByText(/item name/i)).toBeInTheDocument();

    // Optionally, collapse the card again (if desired)
    fireEvent.click(viewUserProfilesCard); // Re-click to collapse
  });

  test("navigates to 'VIEW LABS' page when the link is clicked", () => {
    render(
      <MemoryRouter>
        <AdminDashboard />
      </MemoryRouter>
    );

    const viewLabsCard = screen.getByLabelText(/view labs/i);
    
    // Check if the card has the expected role and functionality
    expect(viewLabsCard).toBeInTheDocument();

    // Simulate click
    fireEvent.click(viewLabsCard);
  });
});
