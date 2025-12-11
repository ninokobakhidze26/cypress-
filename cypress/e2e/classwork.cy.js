describe('template spec', () => {
  it('passes', () => {
    // Test Case 1: Register User
    cy.visit('https://automationexercise.com')
    cy.url().should('include', 'automationexercise.com');
cy.get('a[href="/login"]').click();
cy.contains('New User Signup!').should('be.visible');
cy.get('[data-qa="signup-name"]').type('Nino');
cy.get('[data-qa="signup-email"]').type('ninokobakhidze@gmail.com');
cy.get('[data-qa="signup-button"]').click();
cy.contains('Enter Account Information').should('be.visible');
cy.get('input[name="title"]').check(); 
cy.get('[data-qa="password"]').type('password123');
cy.get('select[name="days"]').select('26');
cy.get('select[name="months"]').select('June');
cy.get('select[name="years"]').select('1997'); 
cy.get('input[name="newsletter"]').check();
cy.get('input[name="optin"]').check();
cy.get('[data-qa="first_name"]').type('Nino');
cy.get('[data-qa="last_name"]').type('Kobakhidze');
cy.get('[data-qa="company"]').type('LSA');
cy.get('[data-qa="address"]').type('Adress 1');
cy.get('[data-qa="address2"]').type('Adress 2');
cy.get('select[name="country"]').select('United States');
cy.get('[data-qa="state"]').type('Georgia');
cy.get('[data-qa="city"]').type('Tbilisi');
cy.get('[data-qa="zipcode"]').type('0101');
cy.get('[data-qa="mobile_number"]').type('599863142');
cy.get('[data-qa="create-account"]').click();
cy.get('[data-qa="continue-button"]').click();
cy.contains('Logged in as').should('be.visible');
cy.get('[href="/delete_account"]').click();
cy.contains('Account Deleted!').should('be.visible');
cy.get('[data-qa="continue-button"]').click();

  })
})