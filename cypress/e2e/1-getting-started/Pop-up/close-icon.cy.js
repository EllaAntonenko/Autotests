// CHECK THE LOGO IS CLICKIBLE AND PROCEEDS TO THE HOMEPAGE

it('Pop-up', function(){
    cy.visit('https://underwoodammo.com/')
    cy.contains('Close form 1', {timeout : 30000}).click()
})
