class HomePage {
  visit() {
    cy.visit('/')
  }

  verifyLogoAppears () {
    cy.get('img[alt="logo edot"').should('be.exist')
  }

  verifyTryForFreeOnHeaders () {
    cy.contains('button', 'Try for Free').as('tryforFreeButton').should('be.visible')
    cy.get('@tryforFreeButton').click()
  }
  
  verifyMainContentAppears (){
    cy.get('main').should('exist')
    cy.contains('h2','Restaurant Solutions').should('be.exist')
  }
  
  verifyWhatsappAndScrollUpBtnAppears () {
    cy.get('a.gtm_Whatsapp').should('exist')
    cy.get('button.group').should('exist')
  }
  
  verifyContactUsButton() {
    cy.get('a[href="/contact-us"]').should('exist').and('be.visible')
  }

  clickContactUsButton() {
    cy.get('a[href="/contact-us"]').first().click()
  }
}
export default HomePage
