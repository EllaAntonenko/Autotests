it('Login with correct data', function() { 
    cy.visit('https://underwoodammo.com/login.php')        
        cy.fixture('credentials.json').then((user) => {
            cy.get('#login_email')
                .type(user[0].email)
            cy.get('#login_pass')
                .type(user[0].password)
                cy.get('.form-actions').within(() => {
                    cy.contains('Sign in').click({force: true})
              })
        })
        cy.contains('Wish Lists').click({force: true})
        cy.get('.button').contains('New Wish List').click()
        cy.get('#wishlistname').then(()=>{
            var name = 'Test List'
            cy.get('#wishlistname').type(name)
            cy.get('.form-actions').contains('Create Wish List').click()
            cy.get('.table-tbody').should(($p)=>{
                expect($p).to.contain(name)
            })
            cy.contains('Delete').click()
            cy.get('.table-tbody').should(($p)=>{
                expect($p).not.to.contain(name)
            })
        })
        
        
    })