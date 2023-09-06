// Check the Redeem Gift Certificate page is displayed after clicking the Redeem Gift Certificate tab 

it('Redeem Gift Certificate page', function(){
    cy.visit('https://underwoodammo.com/giftcertificates.php')
        cy.contains('Redeem Gift Certificate').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/giftcertificates.php?action=redeem')
})