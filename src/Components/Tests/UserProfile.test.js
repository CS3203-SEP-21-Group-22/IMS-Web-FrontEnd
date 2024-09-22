import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import custom matchers
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for testing routing
import { UserProfiles } from "../Pages/UserProfileView"; // Adjust the import path accordingly

describe("UserProfiles Component", () => {
  test("renders user profile cards with links", () => {
    render(
      <MemoryRouter>
        <UserProfiles />
      </MemoryRouter>
    );

    // Using a flexible matcher for any profile view link
    
  });
});
