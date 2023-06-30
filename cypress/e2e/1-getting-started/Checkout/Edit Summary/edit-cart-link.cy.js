
it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
         cy.get('#icon-Shopping-cart').eq(0).click({force: true})
            cy.contains('Check out').click()
                cy.wait(2000)
                    // cy.get('#cart-edit-link').click()
                    //     cy.url().should('be', 'https://underwoodammo.com/cart.php')
                    //     cy.get('.cart-item-quantity').within(()=>{
                    //         cy.contains('Increase Quantity').click({force: true})
                    //     })
})