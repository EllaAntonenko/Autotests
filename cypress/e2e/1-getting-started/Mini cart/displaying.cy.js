// CHECK THE MINI CART IS DISPLAYED AFTER CLICKING THE MINI CART ICON
//   1. Add the product to the cart --> the Shopping cart page is displayed


it('Mini cart displaying', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click()
    cy.get('.navUser-item--cart > .navUser-action').click()
    cy.get('#cart-preview-dropdown').should('have.attr', 'aria-hidden').and('eq', 'false')

    })
    
