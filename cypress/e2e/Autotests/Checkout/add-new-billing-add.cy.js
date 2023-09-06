it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('#icon-Shopping-cart').eq(0).click({force: true})
            cy.contains('Check out').click()
                cy.wait(3000)
                cy.get('#checkout-customer-login').click()
                    cy.fixture('credentials.json').then((user) => {
                        cy.get('#email')
                        .type(user[5].email)
                        cy.get('#password')
                        .type(user[5].password)
               
                            cy.get('[data-test="customer-continue-button"]').click()
                            cy.wait(3000)
                                        })
                                cy.get('.form-actions').within(() => {
                                cy.contains('Continue').click()
                                        })
                                    cy.get('.checkout-view-header').eq(2).within(() => {
                                    cy.contains('Edit').click()
                                        })
                                        cy.get('#addressToggle').click()
                                        cy.contains('Enter a new address').click()
                                        cy.fixture('credentials.json').then((user) => {
                                            cy.get('#firstNameInput-label')
                                                .type(user[1].firstName)
                                            cy.get('#lastNameInput-label')
                                                .type(user[1].lastName)
                                            cy.get('#phoneInput-label')
                                                .type(user[1].phoneNumber)
                                            cy.get('#addressLine1Input-label')
                                                .type(user[1].addressLine)
                                            cy.get('#cityInput-label')
                                                .type(user[1].city)
                                            cy.get('#postCodeInput-label')
                                                .type(user[1].zipCode)
                                            cy.get('select').eq(1).select('Colorado').should('have.value', 'CO')

                                                    cy.get('#checkout-billing-continue').click()
                                                        cy.get('.checkout-view-header').eq(2).should(($p)=>{
                                                        expect($p).to.contain(user[1].lastName)
                                                            })
                })
            })