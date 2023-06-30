// Check the My Account page is displayed after entering the correct data

it('Login with correct data', function() { 
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
        })