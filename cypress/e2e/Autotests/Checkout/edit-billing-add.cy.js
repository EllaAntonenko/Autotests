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
                    
                        cy.get('.customerView').should(($p)=>{
                            expect($p).to.contain(user[5].email)
                                })
                    })
                    cy.get('.form-actions').within(() => {
                        cy.contains('Continue').click()
                    })
                 
                    cy.get('.checkout-view-header').should(($p)=>{
                        expect($p).to.contain('Sara Taylor')
                            })
                           
                    cy.get('.checkout-view-header').eq(2).within(() => {
                                cy.contains('Edit').click()
                                
                            })
                            cy.get('#addressToggle').click()
                            cy.contains('qa test').click()
                            cy.contains('Continue').click()
                    
                    cy.get('.checkout-view-header').should(($p)=>{
                                expect($p).to.contain('qa test')
                                    })
                })