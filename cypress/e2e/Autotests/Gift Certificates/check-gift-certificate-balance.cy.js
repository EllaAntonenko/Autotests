// Check the Check Gift Certificate Balance page is displayed after clicking the Check Gift Certificate Balance tab 


it('Check Gift Certificate Balance', function(){
    cy.visit('https://underwoodammo.com/giftcertificates.php')
        cy.contains('Check Gift Certificate Balance').click({force: true})
            cy.url().should('eq', 'https://underwoodammo.com/giftcertificates.php?action=balance')
})