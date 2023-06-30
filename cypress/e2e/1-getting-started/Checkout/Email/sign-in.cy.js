it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('#icon-Shopping-cart').eq(0).click({force: true})
            cy.contains('Check out').click()
                cy.wait(2000)
                cy.get('#checkout-customer-login').click()
                    cy.fixture('credentials.json').then((user) => {
                        cy.get('#email')
                        .type(user[0].email)
                        cy.get('#password')
                        .type(user[0].password)
               
                        cy.get('[data-test="customer-continue-button"]').click()
                    cy.wait(2000)
                    
                        cy.get('.customerView').should(($p)=>{
                            expect($p).to.contain(user[0].email)
                                })
                    })
                })