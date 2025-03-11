import HomePage from '../pagesObject/homePage'
import ContactUsPage from '../pagesObject/contactUsPage'
import '../support/commands'
const home = new HomePage()
const contact = new ContactUsPage()


describe('Homepage Functionality Verification', () => {
  beforeEach(() => {
    home.visit()
  })
  
  it('Verify Navigation Button On Header', () => {
    // Verify Menu Button
    home.verifyMenuOnHeaders()
    cy.get('ul[data-orientation="vertical"]').within(() => {
      cy.contains('a', 'Home').as('homeMenu')
      .should('exist')
      .and('be.visible')
      cy.get('@homeMenu').click()
    })
    cy.url().should('eq', 'https://edot.id/')
    // Verify Contact Us Button
    home.verifyContactUsButton()
    home.clickContactUsButton()
    contact.verifyPageTitle()
    contact.verifyFormPage()
    cy.get('img[alt="logo edot"').first()
    .as('BackHomeButton')
    .should('be.visible')
    cy.get('@BackHomeButton')
    .click()
    // Verify Try For Free Button
    home.verifyTryForFreeOnHeaders()
    cy.url()
    .should('eq','https://edot.id/?try_for_free=active')
    cy.get('button.rounded-full').first()
    .as('CloseButton')
    .should('exist')
    .and('be.visible')
    cy.get('@CloseButton')
    .click({ force: true }) 
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
    contact.verifyFormPage()
    cy.fixture('user').then((user) => {
      cy.contactUsForm(user)
      cy.get('div[data-title=""]')
      .should('have.text', 'Successfully Sent').and('be.visible')
    })
  })

})

