// The Pop-up is closed after clicking the Close icon

it('Close icon', function(){
    cy.visit('https://underwoodammo.com/')
    cy.contains('Close form 1', {timeout : 30000}).click()
})
