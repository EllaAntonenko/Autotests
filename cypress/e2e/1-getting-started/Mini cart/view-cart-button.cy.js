// CHECK THE 'VIEW CART' BUTTON PROCEEDS TO THE SHOPPING CART PAGE
//  1. Add the product to the cart
//  2. Go back
//  3. Click the Mini cart icon
//  4. Click the 'View cart' button
//  5. Check the Shopping cart page is displayed

it('Logo', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click()
    cy.go('back')
    cy.get('.navUser-item--cart > .navUser-action').click()
    cy.get('.previewCartAction').within(()=>{
        cy.contains('View Cart').click()
    })
    cy.url().should('eq', 'https://underwoodammo.com/cart.php')
    
})