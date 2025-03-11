class HomePage {
  visit() {
    cy.visit('/')
  }

  verifyLogoAppears () {
    cy.get('img[alt="logo edot"').should('be.exist')
  }

  verifyMenuOnHeaders () {
    cy.get('button[aria-label="Menu"]').as('menuButton').should('exist').and('be.visible')
    cy.get('@menuButton').click()
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
  
  verifyFooterAppears () {
    cy.get('footer').should('exist')
  }
  
  verifyContactUsButton() {
    cy.get('a[href="/contact-us"]').should('exist').and('be.visible') // Verifikasi tombol "Contact Us"
  }

  clickContactUsButton() {
    cy.get('a[href="/contact-us"]').first().click() // Klik tombol "Contact Us"
  }
}
export default HomePage
