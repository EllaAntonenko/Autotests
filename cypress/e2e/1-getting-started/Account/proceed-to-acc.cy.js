// Check the My Account icon on navigation proceeds to the My Account page after clicking (the user is logged in)

it('My Account icon proceeds to My Account page', function() { 
    cy.visit('https://underwoodammo.com/login.php')        
        cy.fixture('credentials.json').then((user) => {
            cy.get('#login_email')
                .type(user[0].email)
            cy.get('#login_pass')
                .type(user[0].password)
        })
            cy.get('.form-actions').within(() => {
                cy.contains('Sign in').click({force: true})
          })
                    cy.get('.breadcrumbs').contains('Your Account')
                    cy.get('#icon-UWA-Logo').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/')
                    cy.get('#icon-Person').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/account.php?action=order_status')
        })