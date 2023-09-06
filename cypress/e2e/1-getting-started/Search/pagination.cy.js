//Check the second product results page is displayed after clicking '2' icon on pagination

it('Pagination', function(){
    cy.visit('https://underwoodammo.com/search.php?search_query=ammo')
    cy.get('.pagination-item').eq(1).click()
    cy.url().should('include', 'page=2')
    
})
