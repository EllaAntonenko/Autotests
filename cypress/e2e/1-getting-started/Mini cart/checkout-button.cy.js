// CHECK THE 'VIEW CART' BUTTON PROCEEDS TO THE SHOPPING CART PAGE
//  1. Add the product to the cart
//  2. Click the Mini cart icon
//  3. Click the 'Checkout' button
//  4. Check the Checkout page is displayed

it('Logo', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click() 
    cy.get('.navUser-item--cart > .navUser-action').click()
    cy.get('.previewCartAction').within(()=>{
        cy.contains('Check Out').click()
    })
    cy.url().should('eq', 'https://underwoodammo.com/checkout')
    
})