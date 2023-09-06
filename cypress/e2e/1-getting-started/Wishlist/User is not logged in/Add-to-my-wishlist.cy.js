// Login page is displayed after clicking Wish list icon on PDP when the user is not logged in

it('Wish List icon', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).click()
        cy.get('#icon-Heart-Outlined').click({force: true})
        cy.contains('My Wish List').click()
        cy.get('.breadcrumbs')
        .should(($p)=>{
                expect($p).to.contain('Login')
            })
   
})