//Check the product on product results page is added to the shopping cart after clicking 'ADD' button

it('Add the product to cart', function(){
    cy.visit('https://underwoodammo.com/search.php?search_query=ammo')
    cy.contains('Add').click()
    cy.get('.cart').should('have.attr', 'data-cart-quantity').and('eq', '1')
})
