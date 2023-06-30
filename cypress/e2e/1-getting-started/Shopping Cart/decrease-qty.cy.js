// CHECK THE ADDED PRODUCT IS DISPLAYED IN THE SHOPPING CART
//  1. Add the product to the cart--> the Shopping cart page is displayed
//  2. Check one product is displayed in the cart

it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click()
    cy.go('back')
    cy.contains('Add').click()
    cy.get('.cart-item-quantity').within(()=>{
        cy.contains('Decrease Quantity').click({force: true})
    })
    cy.wait(8000)
    cy.get('.cart-item-value ').eq(0)
    .then(($el)=>{
        var b = $el.text().substring(1)
        var price = Number(b)
        cy.get('.cart-item-value ').eq(1)
        .then(($el)=>{
            var j = $el.text().substring(1)
            var total = Number(j)
        if(total!==price){ throw new Error('Error')
        } cy.log('Ok')
        })
    })
})