Cypress.Commands.add('Customer', (loginName, password)=> {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
    cy.get('input[id="loginFrm_loginname"]').type(loginName);
    cy.get('input[id="loginFrm_password"]').type(password)
    cy.get('button[title="Login"]').click()

})