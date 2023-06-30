// CHECK THE ADDED PRODUCT IS DISPLAYED IN THE SHOPPING CART
//  1. Add the product to the cart--> the Shopping cart page is displayed
//  2. Check one product is displayed in the cart

it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click()
        cy.get('.cart-remove').click({force: true})
            cy.get('.swal2-actions').within(()=>{
                cy.contains('OK').click({force: true})
    })
    cy.get('.page-heading').should(($p)=>{
        expect($p).to.contain('Your Cart (0 items)')
    })
   
})