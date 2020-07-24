/// <reference types="Cypress" />

describe("Testing the accessibility of Workflow page",()=>{
    
    it("Visiting the workflow page",()=>{
        cy.loginServer(200);
        indexedDB.deleteDatabase('localforage');
        cy.visit('/login');
        cy.login('Vedant','Litmus');
        cy.modalServer(200);
        cy.welcomeModalInputs('Litmus','Litmus@mayadata.io','1234');
        cy.get('[data-cy=createWorkflow]').click();
        cy.url().should('include','/workflow');
        cy.log("Visited the workflow page Successfully");
    });
})
