import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers like 'toBeInTheDocument'
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { StudentSelect } from "../Pages/Student/StudentSelect"; // Adjust the import path if necessary

describe("StudentSelect Component", () => {
  test("returns to card selection when back is clicked", () => {
    render(
      <MemoryRouter>
        <StudentSelect />
      </MemoryRouter>
    );

    // Click on the LAPTOP card
    const laptopCard = screen.getByText(/laptop/i); // Use getByText for the card
    fireEvent.click(laptopCard);

    // Check if items are displayed
    // Use getAllByText and select the first instance
    const items = screen.getAllByText(/lenovo legion loq/i);
    expect(items[0]).toBeInTheDocument(); // Check the first instance

    // Find and click the back button
    const backButton = screen.getByRole("button", { name: /back/i }); // Adjust the button name if necessary
    fireEvent.click(backButton);

    // Ensure category cards are rendered again
    expect(screen.getByText(/laptop/i)).toBeInTheDocument(); // Ensure that cards are displayed again
    expect(screen.getByText(/router/i)).toBeInTheDocument(); // Ensure that cards are displayed again
  });
});
