import userinfo from '../fixtures/user.json'
describe('homework12', () => {
    beforeEach(() => {
        cy.fixture("texts.json").as("text")
        })
    // Test Case 1: Register User - 16 steps
 it('homewoek12', function() {
    let num=Math.round(Math.random() * 10000)
    cy.visit('https://automationexercise.com')
    cy.get('a[href="/login"]').click()
    cy.fixture("user.json").then((signup) => {
    cy.get('[data-qa="signup-name"]').type(userinfo.signup.name)
    cy.get('[data-qa="signup-email"]').type(userinfo.signup.email + num + "@gmail.com")
    })
    cy.get('[data-qa="signup-button"]').click();
    cy.contains(this.text.AccInfo).should('be.visible');
    cy.get('input[name="title"]').check(); 
    cy.fixture("user.json").then((info) => {
    cy.get('[data-qa="password"]').type(userinfo.info.password);
    cy.get('[data-qa="first_name"]').type(userinfo.info.Firstname);
    cy.get('[data-qa="last_name"]').type(userinfo.info.Lastname);
    cy.get('[data-qa="company"]').type(userinfo.info.Company);
    cy.get('[data-qa="address"]').type(userinfo.info.Address);
    cy.get('[data-qa="state"]').type(userinfo.info.State);
    cy.get('[data-qa="city"]').type(userinfo.info.City);
    cy.get('[data-qa="zipcode"]').type(userinfo.info.Zipcode);
    cy.get('[data-qa="mobile_number"]').type(userinfo.info.MobileNumber);
})
    cy.get('select[name="days"]').select('26');
    cy.get('select[name="months"]').select('June');
    cy.get('select[name="years"]').select('1997'); 
    cy.get('input[name="newsletter"]').check();
    cy.get('input[name="optin"]').check();
    cy.get('select[name="country"]').select('United States');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.contains(this.text.logdin).should('be.visible');
    cy.get('a[href="/logout"]').click();

    //Test Case 2: Login User with correct email and password
    cy.visit('https://automationexercise.com');
    cy.contains(this.text.homepage).should('be.visible')
    cy.get('a[href="/login"]').click();
    cy.contains(this.text.login).should('be.visible')
    cy.Customer("username" + num + "@gmail.com", "password")
    cy.contains(this.text.user).should('be.visible')
    cy.get('a[href="/delete_account"]').click();
    cy.contains(this.text.delete).should('be.visible')
    
    //Test Case 3: Login User with incorrect email and password
    cy.visit('https://automationexercise.com')
    cy.contains(this.text.homepage).should('be.visible')
    cy.get('a[href="/login"]').click();
    cy.contains(this.text.login).should('be.visible')
    cy.Customer("invaliduser@gmail.com", "invalidpassword")
    cy.contains(this.text.error).should('be.visible')

    
 })
})