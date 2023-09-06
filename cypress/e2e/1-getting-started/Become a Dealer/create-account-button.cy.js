// Check the New Account page is displayed after clicking the Create Account button


it('Create Account button', function(){
    cy.visit('https://underwoodammo.com/become-dealer/')
       cy.contains('CREATE ACCOUNT').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/login.php?action=create_account')
})