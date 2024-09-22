import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers like 'toBeInTheDocument'
import SignIn from "../Pages/SignIn"; // Adjust the import path if necessary

describe("SignIn Component", () => {
  test("renders the sign-in form", () => {
    render(<SignIn />);

    // Check if the "SIGN IN" title is present
    const signInTitle = screen.getByText(/sign in/i);
    expect(signInTitle).toBeInTheDocument();

    // Check if the email input field is present
    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();

    // Check if the password input field is present
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();

    // Check if the login button is present
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    // Check if the "Forgot your password?" link is present
    const forgotPasswordLink = screen.getByText(/forgot your password\?/i);
    expect(forgotPasswordLink).toBeInTheDocument();
  });

  test("submits the form with entered data", () => {
    render(<SignIn />);

    // Find the email and password inputs
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Simulate typing into the input fields
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");

    // Simulate clicking the login button
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    // You can add an assertion for what should happen after the button is clicked.
    // For example, you might mock a form submission handler if present.
  });

  test("renders forgot password link with correct behavior", () => {
    render(<SignIn />);
    
    const forgotPasswordLink = screen.getByText(/forgot your password\?/i);
    expect(forgotPasswordLink).toBeInTheDocument();
    
    // Simulate clicking the forgot password link
    fireEvent.click(forgotPasswordLink);
    
    // Add assertions here if the click should trigger certain behavior, such as navigation
  });
});
