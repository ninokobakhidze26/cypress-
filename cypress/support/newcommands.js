Cypress.Commands.add('Customer', (loginName, password)=> {
    cy.visit('https://automationexercise.com/login')
    cy.get('input[data-qa="login-email"]').type(loginName);
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
})