// The Pop-up is closed after clicking the 'No thanks, I’d rather pay full price' message on Pop-up

it('Close pop-up', function(){
    cy.visit('https://underwoodammo.com/')
    cy.contains('No thanks, I’d rather pay full price', {timeout : 30000}).click()
})
