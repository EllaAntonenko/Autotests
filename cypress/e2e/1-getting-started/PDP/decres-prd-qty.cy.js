

it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).click()
        cy.get('[data-action="inc"]').dblclick()
        cy.get('[data-action="dec"]').click()
        cy.contains('Add to Cart').click()
        cy.get('.modal-header-title')
        .should(($p)=>{
                expect($p).to.contain('Ok, 2 items were added to your cart.')
            })
})