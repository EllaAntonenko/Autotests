// Check the Login page is displayed after clicking the Login button


it('Login button', function(){
    cy.visit('https://underwoodammo.com/become-dealer/')
       cy.contains('LOGIN').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/login.php')
})