// Login page is displayed after clicking Wish list icon and choosing the Create A new Wish List option 
// on PDP when the user is not logged in

it('Create a New Wish List', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).click()
        cy.get('#icon-Heart-Outlined').click({force: true})
        cy.contains('Create New Wish List').click()
        cy.get('.breadcrumbs')
        .should(($p)=>{
                expect($p).to.contain('Login')
            })
   
})