//Check the 'Next' button on pagination procceds from the first 
// to the second product results page

it('"Next" button', function(){
    cy.visit('https://underwoodammo.com/search.php?search_query=ammo')
    cy.contains('Next').click()
    cy.url().should('include', 'page=2')
    
})