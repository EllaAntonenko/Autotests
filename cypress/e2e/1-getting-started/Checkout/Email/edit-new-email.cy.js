
it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
         cy.get('#icon-Shopping-cart').eq(0).click({force: true})
            cy.get('.page-heading').should(($p)=>{
                expect($p).to.contain('Your Cart (1 item)')
            })
                cy.contains('Check out').click()
                     cy.wait(2000)
                        cy.url().should('eq', 'https://underwoodammo.com/checkout')
                            cy.get('#email').type('qatest@yopmail.com')
                                cy.get('#checkout-customer-continue').click()
                                
                                
                                cy.get('.customerView').should(($p)=>{
                                    expect($p).to.contain('qatest@yopmail.com')
                                     })
                                        cy.contains('Edit').click()
                                            cy.get('#email').clear().type('qatest.new@yopmail.com')
                                                cy.get('#checkout-customer-continue').click()

                                cy.get('.customerView').should(($p)=>{
                                    expect($p).to.contain('qatest.new@yopmail.com')
                                     })
            })
            