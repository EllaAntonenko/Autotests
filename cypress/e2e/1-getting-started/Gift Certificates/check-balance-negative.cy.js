// Check your gift certificate balance with invalid code


it('Check balance', function(){
    cy.visit('https://underwoodammo.com/giftcertificates.php?action=balance')
        cy.get('#giftcertificatecode').type('Z50-Y6K-COS-402')
            cy.contains('Check Balance').click()
                cy.get('#alertBox-message-text').should(($p)=>{
                    expect($p).to.contain('The gift certificate code you entered does not exist.')
                
})
})