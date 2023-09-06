// CHECK THE CHECKOUT BUTTON PROCEEDS TO THE CHECKOUT PAGE
//  1. Add the product to the cart --> the Shopping cart page is displayed
//  2. Click the Checkout button --> the Checkout page is displayed

it('The Checkout button proceeds to the Checkout page', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click()
    cy.get('.button').contains('Check out').click()
    cy.wait(5000)
    cy.url().should('eq', 'https://underwoodammo.com/checkout')
   
})