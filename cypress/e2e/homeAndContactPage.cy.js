import HomePage from '../pagesObject/homePage'
import ContactUsPage from '../pagesObject/contactUsPage'
import { generateRandomUser } from '../support/randomUser'
import '../support/commands'
const home = new HomePage()
const contact = new ContactUsPage()
const randomUser = generateRandomUser()


describe('Verify Homepage Functionality', () => {
  beforeEach(() => {
    home.visit()
    home.verifyLogoAppears()
    home.verifyWhatsappAndScrollUpBtnAppears()
  })
  
  it('Verify Navigation Button for Try For Free (ework) On Headers', () => {
    home.verifyTryForFreeOnHeaders()
    cy.contains('button', 'Your Sales Force Automation')
      .as('tryEworkFreeButton')
      .should('be.visible')
    cy.get('@tryEworkFreeButton').click()
    cy.contains('a', 'Continue Register')
      .as('continueButton')
      .should('exist')
      .and('be.visible')
    cy.get('@continueButton').click()
    cy.wait(2000)
    cy.origin('https://cronus.edot.id', () => {
      cy.url().should('eq', 'https://cronus.edot.id/registration?client_id=hermes-webapp&redirect_uri=https%3A%2F%2Fesuite.edot.id%2Fcallback&method=phone')
    })
  })

  it('Verify Navigation Button for Point of Sales On Main Content', () => {
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
})

describe('Verify Contact Us Functionality', () => {
  beforeEach(() => {
    home.visit()
    home.verifyLogoAppears()
    home.verifyWhatsappAndScrollUpBtnAppears()
  })

  it('Verify Contact Us Form Functionality With Random Data', () => {
    home.verifyContactUsButton()
    home.clickContactUsButton()
    contact.verifyPageTitle()
    contact.verifyFormPage()
    cy.contactUsForm(randomUser)
    cy.get('div[data-title=""]')
    .should('have.text', 'Successfully Sent')
    .and('be.visible')
  })

  it('Verify Contact Us Form Functionality With Static Data', () => {
    home.verifyContactUsButton()
    home.clickContactUsButton()
    contact.verifyPageTitle()
    contact.verifyFormPage()
    cy.fixture('user').then((user) => {
      cy.contactUsForm(user)
      cy.wait(2000)
      cy.get('div[data-title=""]')
      .should('have.text', 'You have already submitted this form.').and('be.visible')
    })
})
})
