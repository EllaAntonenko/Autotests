// Check the information is edited and saved after changing and clicking the 'Save Address' button on Edit Address page

it('Edit Address', function() { 
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
      cy.contains('Addresses').click({force: true})
      cy.contains('Edit').eq(0).click()
      cy.fixture('credentials.json').then((user) => {
        cy.get('#FormField_5_input')
            .clear()
            .type(user[2].newLastName)
        cy.contains('Save Address').click()
        cy.get('.panel-body').contains(user[2].newLastName)
    })
})