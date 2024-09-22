import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboard from '../../src/Components/Pages/Admin/AdminDash';// Adjust the import path

describe('AdminDashboard.cy.jsx', () => {
  beforeEach(() => {
    // Mount the AdminDashboard component within a MemoryRouter before each test
    cy.mount(
      <MemoryRouter>
        <AdminDashboard />
      </MemoryRouter>
    );
  });

  it('navigates to user profiles route when the card is clicked', () => {
    // Click on the VIEW USER PROFILES card
    cy.get('div').contains('VIEW USER PROFILES').click();

    
  });

  it('renders the VIEW LABS card', () => {
    // Check if the VIEW LABS card is visible
    cy.get('div').contains('VIEW LABS').should('be.visible');
  });
});
