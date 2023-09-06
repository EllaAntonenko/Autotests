//Check the 'Previous' button on pagination procceds from the fifth 
// to the fourth product results page

it(' "Previous" button', function(){
    cy.visit('https://underwoodammo.com/search.php?search_query=ammo')
    cy.get('.pagination-item').eq(4).click()
    cy.contains('Previous').click()
    cy.url().should('include', 'page=4')
    
})