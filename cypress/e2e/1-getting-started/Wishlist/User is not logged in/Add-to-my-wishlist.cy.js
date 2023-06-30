// Add to wishlist when the user is not logged in
//the log in page should be displayed

it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).click()
        cy.get('#icon-Heart-Outlined').click({force: true})
        cy.contains('My Wish List').click()
        cy.get('.breadcrumbs')
        .should(($p)=>{
                expect($p).to.contain('Login')
            })
   
})