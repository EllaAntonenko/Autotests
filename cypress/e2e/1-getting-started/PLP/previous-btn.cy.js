//Check the 'Previous' button on pagination procceds from the fourth 
// to the third page

it(' "Previous" button', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.get('.pagination-item').eq(3).click()
    cy.contains('Previous').click()
    cy.url().should('include', 'page=3')
    
})