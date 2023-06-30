// Check the error message is displayed after entering the incorrect email and correct password

it('Login with correct data', function() { 
    cy.visit('https://underwoodammo.com/login.php')        
        cy.fixture('credentials.json').then((user) => {
            cy.get('#login_email')
                .type(user[1].email)
            cy.get('#login_pass')
                .type(user[1].password)
        })
        cy.get('.form-actions').within(() => {
                        cy.contains('Sign in').click({force: true})
                      })
            cy.get('#alertBox-message-text').should(($p)=>{
                expect($p).to.contain('Your email address or password is incorrect.')
            })
                    
        })