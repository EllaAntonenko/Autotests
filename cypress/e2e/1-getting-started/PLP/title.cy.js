// The PLP title is displayed and has a corresponding info

it('Page title', function(){
    cy.visit('https://underwoodammo.com/')
       
    cy.get('.navPages').contains('Shop').click({force: true})
           cy.get('.navPage-subMenu-action').eq(2).click({force: true})
                cy.get('.page-heading').contains('Shop Ammo')
})
