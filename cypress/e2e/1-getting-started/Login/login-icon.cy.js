// Check the Login icon proceeds to the login page

it('Login icon', function() { 
    cy.visit('https://underwoodammo.com/')
        cy.get('#icon-Person').click({force: true})
            cy.url().should('eq', 'https://underwoodammo.com/login.php')
})