import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers like 'toBeInTheDocument'
import { AdminProfile } from "../Pages/Admin/AdminProfile"; // Adjust path as necessary

describe("AdminProfile Component", () => {
  test("renders the profile image, name, department, and email", () => {
    render(<AdminProfile />);

    expect(screen.getByAltText(/walrus/i)).toBeInTheDocument();
    expect(screen.getByText(/walrus smith/i)).toBeInTheDocument();
    expect(screen.getByText(/department of cse/i)).toBeInTheDocument();
    expect(screen.getByText(/walrussmithsolutions@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/200123d/i)).toBeInTheDocument();
  });

  test("renders the status and date joined fields", () => {
    render(<AdminProfile />);

    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/admin/i)).toBeInTheDocument();
    expect(screen.getByText(/date joined/i)).toBeInTheDocument();
    expect(screen.getByText(/2024\/12\/08/i)).toBeInTheDocument();
  });

  test("renders the FontAwesome icons", () => {
    render(<AdminProfile />);

    // Use a more flexible approach to find the envelope icon
    const envelopeIcon = screen.getByText(/walrussmithsolutions@gmail.com/i).previousSibling;
    expect(envelopeIcon).toBeInTheDocument();

    // Check if the edit icon is rendered
    const editIcon = screen.getByText(/walrus smith/i).nextSibling; // Adjust based on structure
    expect(editIcon).toBeInTheDocument();
  });
});
