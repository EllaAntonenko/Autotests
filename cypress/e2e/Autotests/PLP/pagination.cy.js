//Check the fifth page is displayed after clicking '5' icon on pagination on PLP

it('Pagination', function(){
    cy.visit('https://underwoodammo.com/search.php?search_query=ammo')
    cy.get('.pagination-item').eq(4).click()
    cy.url().should('include', 'page=5')
    
})