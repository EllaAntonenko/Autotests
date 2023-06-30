// CHECK THE LOGO IS CLICKIBLE AND PROCEEDS TO THE HOMEPAGE

it('Pop-up', function(){
    cy.visit('https://underwoodammo.com/')
    cy.contains('SEND MY DISCOUNT CODE NOW!', {timeout : 30000}).click()
    cy.get('#email_63648991').type('qatest@yopmail.com')
    //cy.get('button').should('have.class', "needsclick go952291206 kl-private-reset-css-Xuajs1").eq(3)
    cy.get(':nth-child(4) > [data-testid="form-component"] > .needsclick').click()
    cy.get('[data-testid="klaviyo-form-SxQJ8i"]')
        .should(($p)=>{
                expect($p).to.contain('CONGRATULATIONS!')
            })
})
