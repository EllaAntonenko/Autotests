// Check the My Account icon proceeds to the login page (user is not logged in)

it('My Account icon', function() { 
    cy.visit('https://underwoodammo.com/')
        cy.get('#icon-Person').click({force: true})
            cy.url().should('eq', 'https://underwoodammo.com/login.php')
})