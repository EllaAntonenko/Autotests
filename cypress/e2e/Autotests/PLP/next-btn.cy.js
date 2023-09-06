//Check the 'Next' button on pagination procceds from the second 
// to the third page

it('"Next" button', function(){
    cy.visit('https://underwoodammo.com/ammo/?page=2')
    cy.contains('Next').click()
    cy.url().should('include', 'page=3')
    
})