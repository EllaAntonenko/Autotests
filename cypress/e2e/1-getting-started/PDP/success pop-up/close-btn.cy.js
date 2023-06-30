      // CHECK THE ADDED PRODUCT IS DISPLAYED IN THE SHOPPING CART
//  1. Add the product to the cart--> the Shopping cart page is displayed
//  2. Check one product is displayed in the cart

it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.get('.card-title').eq(1).then(($title)=>{
        var name = $title.text().trim()
        cy.log(name)
            cy.get('.card-title').eq(1).click()
            cy.contains('Add to Cart').click()
            cy.wait(3000)
            cy.get('#previewModal > .modal-close > [aria-hidden="true"]').click({force: true})
            cy.get('#previewModal').should('have.attr', 'aria-hidden').and('eq', 'true')
        
   
   
})
})