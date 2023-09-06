// Check the new address is added to the list of addresses after entering valid data into all required fields 
//  and clicking 'Save Address' button

it('Add a new address', function() { 
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
      cy.get('.address-symbol').click({force: true})
      cy.get("select")
      .select("United States")
      .invoke("val")
      .should("eq", "United States")
      cy.get("select").eq(1)
            .select("Maryland")
            .invoke("val")
            .should("eq", "Maryland")
      cy.fixture('credentials.json').then((user) => {
        cy.get('#FormField_4_input')
            .type(user[1].firstName)
        cy.get('#FormField_5_input')
            .type(user[1].lastName)
        cy.get('#FormField_7_input')
            .type(user[1].phoneNumber)
        cy.get('#FormField_8_input')
            .type(user[1].addressLine)
        cy.get('#FormField_10_input')
            .type(user[1].city)
        cy.get('#FormField_13_input')
            .type(user[1].zipCode)
            
    
        cy.contains('Save Address').click()
        cy.get('.panel-body').contains(user[1].lastName)
    })
})