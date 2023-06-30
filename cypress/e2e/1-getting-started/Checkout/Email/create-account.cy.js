
it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
         cy.get('#icon-Shopping-cart').eq(0).click({force: true})
            cy.get('.page-heading').should(($p)=>{
                expect($p).to.contain('Your Cart (1 item)')
            })
                cy.contains('Check out').click()
                     cy.wait(2000)
                        cy.url().should('eq', 'https://underwoodammo.com/checkout')
                            cy.get('#checkout-customer-login').click()
                            cy.contains('Create an account').click()
                                cy.fixture('credentials.json').then((user) => {
                                    cy.get('#firstName-label').type(user[1].firstName)
                                    cy.get('#lastName-label').type(user[1].lastName)
                                    cy.get('#email-label').type(user[1].email)
                                    cy.get('#password-label').type(user[1].password)
                                    cy.get('input[name="customFields.field_28"]').type(1889)
                                    cy.get('[for="field_29-0"]').click()
                                    cy.get('#checkout-customer-create').click()
                                        cy.wait(4000)
                                    cy.get('.customerView').should(($p)=>{
                                        expect($p).to.contain(user[1].email)
                                         })
        })
})