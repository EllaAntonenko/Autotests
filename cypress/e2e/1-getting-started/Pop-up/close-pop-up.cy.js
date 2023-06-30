// CHECK THE LOGO IS CLICKIBLE AND PROCEEDS TO THE HOMEPAGE

it('Pop-up', function(){
    cy.visit('https://underwoodammo.com/')
    cy.contains('No thanks, I’d rather pay full price', {timeout : 30000}).click()
})
