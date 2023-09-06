it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
         cy.get('#icon-Shopping-cart').eq(0).click({force: true})
            cy.contains('Check out').click()
                cy.wait(2000)
                    cy.contains('Coupon/Gift Certificate').click()
                        cy.get('input[name="redeemableCode"]').type('74yiruh')
})
