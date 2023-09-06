// CHECK THE LOGO IS CLICKIBLE AND PROCEEDS TO THE HOMEPAGE

it('Logo', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('.navPages').contains('Shop').click({force: true})
            cy.get('.navPage-subMenu-action').eq(2).click({force: true})
                cy.get('#icon-UWA-Logo').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/')
})
