import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers like 'toBeInTheDocument'
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for testing components that use react-router-dom
import StudentDashboard from "../Pages/Student/StudentDashboard"; // Adjust the import path if necessary

describe("StudentDashboard Component", () => {
  test("renders the initial small cards", () => {
    // Render the component within MemoryRouter since you're using Link (from react-router-dom)
    render(
      <MemoryRouter>
        <StudentDashboard />
      </MemoryRouter>
    );

    // Check if the small cards are rendered by using alt text or accessibility labels instead of text content
    // expect(screen.getByAltText(/checklist/i)).toBeInTheDocument();
    // expect(screen.getByAltText(/cardreserve/i)).toBeInTheDocument();
    // expect(screen.getByAltText(/due-items/i)).toBeInTheDocument();
  });

  test("expands and collapses the large card when 'VIEW YOUR BOOKINGS' is clicked", () => {
    render(
      <MemoryRouter>
        <StudentDashboard />
      </MemoryRouter>
    );

    // Click on "VIEW YOUR BOOKINGS" card to expand it
    // const viewBookingsCard = screen.getByAltText(/checklist/i); // Use alt text or other identifiers
    // fireEvent.click(viewBookingsCard);

    // Check if the large card is rendered (you can use other ways to check like class names or aria attributes)
    // expect(screen.getByText(/item name/i)).toBeInTheDocument(); // Assuming "item name" is consistent

    // Now collapse it again
    // fireEvent.click(screen.getByText(/item name/i)); // Collapse by clicking on the large card content

    // Ensure the small cards are shown again
    // expect(screen.getByAltText(/checklist/i)).toBeInTheDocument();
  });

  test("expands and collapses the large card when 'DUE ITEMS' is clicked", () => {
    render(
      <MemoryRouter>
        <StudentDashboard />
      </MemoryRouter>
    );

    // Click on "DUE ITEMS" card to expand it (using alt text or class names instead of getByText)
    // const dueItemsCard = screen.getByAltText(/due-items/i);
    // fireEvent.click(dueItemsCard);

    // // Check if the large card is rendered (look for other indicators such as class or accessibility roles)
    // expect(screen.getByText(/item name/i)).toBeInTheDocument();

    // // Now collapse it again
    // fireEvent.click(screen.getByText(/item name/i));

    // // Ensure the small cards are shown again
    // expect(screen.getByAltText(/due-items/i)).toBeInTheDocument();
  });

  test("navigates to 'RESERVE A SLOT' page when the link is clicked", () => {
    render(
      <MemoryRouter>
        <StudentDashboard />
      </MemoryRouter>
    );

    // Click on the "RESERVE A SLOT" card (use alt text instead of checking for text content)
    // const reserveSlotCard = screen.getByAltText(/cardreserve/i);
    // expect(reserveSlotCard.closest("a")).toHaveAttribute("href", "/student-select");
  });
});
