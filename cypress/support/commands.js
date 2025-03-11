// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Contact Us Form
Cypress.Commands.add('contactUsForm', (user) => {
    cy.get('#name').type(user.name)
    cy.get('#email').type(user.email)
    cy.get('#phone_number').type(user.phone_number)
    cy.get('#company_name').type(user.company_name)
    cy.get('#number_of_employees').click()
    cy.get('div[data-value="51 - 100"]').click()
    cy.get('#solutions').click()
    cy.get('div[data-value="esuite (DMS)"]').click()
    cy.get('#questions').type(user.questions)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('contactUsForm', (userRandom) => {
    cy.get('#name').type(userRandom.name)
    cy.get('#email').type(userRandom.email)
    cy.get('#phone_number').type(userRandom.phone_number)
    cy.get('#company_name').type(userRandom.company_name)
    cy.get('#number_of_employees').click()
    cy.get('div[data-value="51 - 100"]').click()
    cy.get('#solutions').click()
    cy.get('div[data-value="esuite (DMS)"]').click()
    cy.get('#questions').type(userRandom.questions)
    cy.get('button[type="submit"]').click()
})