import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StudentDashboard from "./StudentDashboard";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom';


describe("StudentDashboard", () => {
  test("renders initial cards and toggles expansion on click", () => {
    // Render the component inside a Router since it uses Link
    render(
      <Router>
        <StudentDashboard />
      </Router>
    );

    // Check that the initial cards are rendered
    const bookingCard = screen.getByText("VIEW YOUR BOOKINGS");
    const reserveCard = screen.getByText("RESERVE A SLOT");
    const dueItemsCard = screen.getByText("DUE ITEMS");

    expect(bookingCard).toBeInTheDocument();
    expect(reserveCard).toBeInTheDocument();
    expect(dueItemsCard).toBeInTheDocument();

    // Click on "VIEW YOUR BOOKINGS" card
    fireEvent.click(bookingCard);

    // Check that the LargeCard is rendered with the expected content
    expect(screen.getByText("ITEM NAME")).toBeInTheDocument();
    expect(screen.getByText("SERIAL NO")).toBeInTheDocument();
    expect(screen.getByText("LAB")).toBeInTheDocument();
    expect(screen.getByText("DATE REQUESTED")).toBeInTheDocument();

    // Check that the other cards are not rendered
    expect(screen.queryByText("VIEW YOUR BOOKINGS")).not.toBeInTheDocument();
    expect(screen.queryByText("RESERVE A SLOT")).not.toBeInTheDocument();
    expect(screen.queryByText("DUE ITEMS")).not.toBeInTheDocument();

    // Click again to collapse the card
    fireEvent.click(screen.getByText("ITEM NAME"));

    // Check that the initial cards are rendered again
    expect(screen.getByText("VIEW YOUR BOOKINGS")).toBeInTheDocument();
    expect(screen.getByText("RESERVE A SLOT")).toBeInTheDocument();
    expect(screen.getByText("DUE ITEMS")).toBeInTheDocument();
  });
});
