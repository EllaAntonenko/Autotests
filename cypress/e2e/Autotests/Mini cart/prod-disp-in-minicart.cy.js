// CHECK THE ADDED PRODUCT IS DISPLAYED IN THE MINI CART
//  1. Add the product to the cart
//  2. Check the number of added product is displayed on the Mini cart icon

it('The added product displaying in the mini cart', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click()
    cy.get('.navUser-item--cart > .navUser-action').within(()=>{
        cy.get('.countPill').should(($p)=>{
            expect($p).to.contain('1')
             })
        })
   })
    