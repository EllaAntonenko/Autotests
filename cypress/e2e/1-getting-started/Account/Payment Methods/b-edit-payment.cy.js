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
      cy.contains('Payment Methods').click({force: true})
      cy.contains('Edit').eq(0).click()
      cy.fixture('credentials.json').then((user) => {
        cy.get('#FormField_13_input')
            .clear()
            .type(user[4].newZipCode)
            cy.get('.form-actions > .button--primary').click()
        cy.get('.methodDetails-description').contains(user[4].newZipCode)
    })

    })