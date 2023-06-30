
        // CHECK THE ADDED PRODUCT IS DISPLAYED IN THE SHOPPING CART
//  1. Add the product to the cart--> the Shopping cart page is displayed
//  2. Check one product is displayed in the cart

it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).click()
        cy.contains('Add to Cart').click()
        cy.get('.modal-header-title')
        .should(($p)=>{
                expect($p).to.contain('Ok, 1 item was added to your cart.')
            })
            cy.get('.previewCartCheckout').click()
            cy.contains('View or edit your cart').click()
            cy.get('.page-heading').should(($p)=>{
                expect($p).to.contain('Your Cart (1 item)')
            })
   
})
    