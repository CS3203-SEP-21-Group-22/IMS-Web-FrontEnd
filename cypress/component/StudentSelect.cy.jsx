import React from 'react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to handle useNavigate
import { StudentSelect } from '../../src/Components/Pages/Student/StudentSelect'; // Import StudentSelect component

describe('StudentSelect.cy.jsx', () => {
  beforeEach(() => {
    // Mount the StudentSelect component within a MemoryRouter before each test
    cy.mount(
      <MemoryRouter>
        <StudentSelect />
      </MemoryRouter>
    );
  });

  it('renders the card components', () => {
    // Check if the card elements are visible
    const cardNames = ['LAPTOP', 'ROUTER', 'KEYBOARD', 'MICROCONTROLLER', 'PROJECTOR', 'MOUSE'];
    cardNames.forEach(name => {
      cy.get('div').contains(name).should('be.visible');
    });
  });

  it('displays TableTop when a card is clicked', () => {
    // Click on the LAPTOP card
    cy.get('div').contains('LAPTOP').click();

    // Check if the TableTop component is displayed after the click
    cy.get('table').should('exist');

    // Verify the table contains the correct content for laptops
    cy.get('td').contains('Lenovo Legion LOQ').should('be.visible');
  });

  it('hides TableTop and goes back to cards view when the BACK button is clicked', () => {
    // Click on the LAPTOP card to display the TableTop
    cy.get('div').contains('LAPTOP').click();

    // Click the BACK button
    cy.get('button').contains('BACK').click();

    // Verify the TableTop is no longer visible
    cy.get('table').should('not.exist');

    // Verify the cards are visible again
    cy.get('div').contains('LAPTOP').should('be.visible');
  });

  it('handles the return date input and PICK button correctly', () => {
    // Click on the LAPTOP card to display the TableTop
    cy.get('div').contains('LAPTOP').click();

    // Interact with the return date input
    const returnDate = '2024-12-31';
    
    // Ensure you're selecting the specific input element for typing
    cy.get('input[type="date"]').first().clear().type(returnDate);

    // Click the PICK button
    cy.get('button').contains('PICK').click();

    // Optionally verify if it navigates to the request page or whatever should happen after the click
    // Example: Check the URL or any other behavior you expect after clicking PICK
    // cy.url().should('include', '/request');
  });
});
