// The product is deleted from the shopping cart after clicking the Remove icon on Shopping cart page

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