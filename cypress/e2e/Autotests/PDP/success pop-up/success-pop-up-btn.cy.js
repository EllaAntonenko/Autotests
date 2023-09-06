// Checkout page is displayed after clicking the Proceed to checkout link on success pop-up

it('Proceed to checkout link', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.get('.card-title').eq(1).then(($title)=>{
        var name = $title.text().trim()
        cy.log(name)
            cy.get('.card-title').eq(1).click()
            cy.contains('Add to Cart').click()
            cy.contains('Proceed to checkout').click()
            cy.url().should('eq', 'https://underwoodammo.com/checkout')
            cy.get('.productList').should(($p)=>{
                expect($p).to.contain(name)
            })
        
   
})
})