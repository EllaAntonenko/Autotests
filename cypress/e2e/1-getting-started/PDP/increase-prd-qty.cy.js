// Check the product quantity is increased after clicking the Plus icon

it('Plus icon (Increase qty) on PDP', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).click()
        cy.get('[data-action="inc"]').dblclick()
        cy.contains('Add to Cart').click()
        cy.get('.modal-header-title')
        .should(($p)=>{
                expect($p).to.contain('Ok, 3 items were added to your cart.')
            })
})
    