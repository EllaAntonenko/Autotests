it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('#icon-Shopping-cart').eq(0).click({force: true})
            cy.contains('Check out').click()
                cy.wait(2000)
                cy.get('#checkout-customer-login').click()
                    cy.fixture('credentials.json').then((user) => {
                        cy.get('#email')
                        .type(user[5].email)
                        cy.get('#password')
                        .type(user[5].password)
               
                        cy.get('[data-test="customer-continue-button"]').click()
                        cy.wait(7000)
                        //cy.get(':nth-child(1) > :nth-child(2) > .form-field > .form-label').click()
                        cy.get('#sameAsBilling').click({force: true})
                        cy.get('#checkout-shipping-continue').click()
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
                            cy.get('#provinceInput-label')
                                .type('Colorado')

                                    cy.get('#checkout-billing-continue').click()
                                        cy.get('.checkout-view-header').eq(2).should(($p)=>{
                                        expect($p).to.contain(user[1].lastName)
                                        })})
                       
                    })
                })