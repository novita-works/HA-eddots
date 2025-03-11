class contactUsPage {
  verifyPageTitle() {
      cy.get('h1.text-3xl.font-bold.md\\:text-4xl.lg\\:text-\\[56px\\].lg\\:leading-\\[68px\\]')
      .should('have.text', 'Explore how eDOT  ecosystem can work for you.')
  }

  verifyFormPage() {
      cy.get('#name').should('exist')
      cy.get('#email').should('exist')
      cy.get('#phone_number').should('exist')
      cy.get('#company_name').should('exist')
      cy.get('#number_of_employees').should('exist')
      cy.get('#solutions').should('exist')
      cy.get('#questions').should('exist')
      cy.get('button[type="submit"]').should('exist')
  }
} 
export default contactUsPage