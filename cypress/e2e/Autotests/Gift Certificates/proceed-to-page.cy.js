// Check the Gift Certificates page is displayed after clicking the Gift Certificates icon on the navigation


it('Gift Certificates page', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('#icon-giftcard').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/giftcertificates.php')
})