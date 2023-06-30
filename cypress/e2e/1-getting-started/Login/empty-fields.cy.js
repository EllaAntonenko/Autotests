// Check the error message is displayed after leaving empty the required fields

it('Login with correct data', function() { 
    cy.visit('https://underwoodammo.com/login.php')        
        
        cy.get('.form-actions').within(() => {
                        cy.contains('Sign in').click({force: true})
                      })

            cy.get('.form-inlineMessage').first().should(($p)=>{
                expect($p).to.contain('Please use a valid email address, such as user@example.com.')
            })
            cy.get('.form-inlineMessage').last().should(($p)=>{
                expect($p).to.contain('You must enter a password.')
            })

        })