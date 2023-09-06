// Check the Find Dealer page is displayed after clicking the Find Dealer category on navigation

it('Find Dealer category', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('.navPages').contains('Find Dealer').click({force: true})
            cy.url().should('eq', 'https://underwoodammo.com/find-dealer/')
})