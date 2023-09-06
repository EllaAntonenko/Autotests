// The product is removed from the wish list after clicking the Remove Item link on Wish list page

it('Remove item from the Wish list page', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).click()
        cy.get('#icon-Heart-Outlined').click({force: true})
        cy.contains('Add to My Wish List').click()
        cy.fixture('credentials.json').then((user) => {
            cy.get('#login_email')
                .type(user[0].email)
            cy.get('#login_pass')
                .type(user[0].password)
        })
            cy.get('.form-actions').within(() => {
                cy.contains('Sign in').click({force: true})
          })
          cy.get('tr > :nth-child(1) > a').click()

   cy.get('form').contains('Remove Item').click()
   cy.get('.alertBox')
        .should(($p)=>{
                expect($p).to.contain('Your Wish List is empty. When you add items to your Wish List they will appear here.')
            })
    
})