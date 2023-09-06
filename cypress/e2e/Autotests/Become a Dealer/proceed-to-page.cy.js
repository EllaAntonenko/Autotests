// Check the Become a Delear page is displayed after clicking the Become a Delear category title on the navigation


it('Become a Delear page', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('.navPages-item').eq(5).click()
            cy.url().should('eq', 'https://underwoodammo.com/become-dealer/')
})