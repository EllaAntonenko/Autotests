//Check the Search Result page is displayed after entering search request and pressing enter

it('Search Result page', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('#quick-search-expand').type('ammo')
        cy.get('.quickSearchEnter').click({force: true})
            
})
