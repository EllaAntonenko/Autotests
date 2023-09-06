

// it('Logo', function(){
//     cy.visit('https://underwoodammo.com/')
//          cy.get('#icon-Shopping-cart').eq(0).click({force: true})
//             cy.get('.page-heading').should(($p)=>{
//                 expect($p).to.contain('Your Cart (1 item)')
//             })
//                 cy.contains('Check out').click()
//                      cy.wait(2000)
//                         cy.url().should('eq', 'https://underwoodammo.com/checkout')
//                             cy.get('#email').type('qatest@yopmail.com')
//                                 cy.get('#checkout-customer-continue').click()
                                
//                                 cy.get('.customerView').should(($p)=>{
//                                     expect($p).to.contain('qatest@yopmail.com')
//                                      })

//                                         cy.fixture('credentials.json').then((user) => {
//                                             cy.get('#firstNameInput-label')
//                                             .type(user[1].firstName)
//                                             cy.get('#lastNameInput-label')
//                                             .type(user[1].lastName)
//                                             cy.get('#phoneInput-label')
//                                             .type(user[1].phoneNumber)
//                                             cy.get('#addressLine1Input-label')
//                                             .type(user[1].addressLine)
//                                             cy.get('#cityInput-label')
//                                             .type(user[1].city)
//                                             cy.get('#postCodeInput-label')
//                                             .type(user[1].zipCode)
//                                             cy.get('#checkout-shipping-continue').click()
                               
//             })
//         })