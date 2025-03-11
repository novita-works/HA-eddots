import HomePage from '../pagesObject/homePage'
import ContactUsPage from '../pagesObject/contactUsPage'
import '../support/commands'
const home = new HomePage()
const contact = new ContactUsPage()


describe('Homepage Functionality Verification', () => {
  beforeEach(() => {
    home.visit()
    home.verifyLogoAppears()
    home.verifyWhatsappAndScrollUpBtnAppears()
  })
  
  it('Verify Navigation Button On Header', () => {
    // Verify Try For Free Button
    home.verifyTryForFreeOnHeaders()
    cy.url()
    .should('eq','https://edot.id/?try_for_free=active')
  })

  it('Verify Navigation Button On Main', () => {
    // Verify Section Restaurant Solutions 
    home.verifyMainContentAppears
    cy.contains('button', 'Point of Sales')
    .as('posButton')
    .should('be.visible')
    cy.get('@posButton').click()
    cy.get('a[aria-label="Home - Point of Sales Try for Free"]')
    .should('be.visible')
    .and('contain', 'Get Offer')
    .click()
    cy.url().should('eq','https://edot.id/contact-us')
  })

  it('Verify Contact Us Form Functionality', () => {
    home.verifyContactUsButton()
    home.clickContactUsButton()
    contact.verifyPageTitle()
    contact.verifyFormPage()
    cy.fixture('user').then((user) => {
      cy.contactUsForm(user)
      cy.get('div[data-title=""]')
      .should('have.text', 'Successfully Sent').and('be.visible')
    })
  })

})

