
        // CHECK THE ADDED PRODUCT IS DISPLAYED IN THE SHOPPING CART
//  1. Add the product to the cart--> the Shopping cart page is displayed
//  2. Check one product is displayed in the cart

it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).then(($title)=>{
            var name = $title.text().trim().substring(1)
                cy.get('.card-img-container').eq(1).click()
        cy.get('.productView-title').then(($title2)=>{
            var name2 = $title2.text().trim().substring(1)
            if(name!==name2){
                throw new Error('Error')
            }  cy.log('ok')
       })
    })
})