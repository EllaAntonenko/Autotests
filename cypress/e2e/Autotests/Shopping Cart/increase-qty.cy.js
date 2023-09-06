// Product qty is increased after clicking the Plus icon 

it('Increase Quantity', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.contains('Add').click()
    cy.get('.cart-item-quantity').within(()=>{
        cy.contains('Increase Quantity').click({force: true})
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
        if(total!==price*2){ throw new Error('Error')
        } cy.log('Ok') 
        })
    })
})