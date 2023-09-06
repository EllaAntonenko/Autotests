// Check the product is added to the cart after clicking the Add to Cart button on PDP

it('Add to Cart button on PDP', function(){
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
    