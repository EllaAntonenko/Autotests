// All wish lists are deleted after clicking the Delete All button on Wish List page

it('Delete all wishlists', function() { 
    cy.visit('https://underwoodammo.com/login.php')        
        cy.fixture('credentials.json').then((user) => {
            cy.get('#login_email')
                .type(user[0].email)
            cy.get('#login_pass')
                .type(user[0].password)
                cy.get('.form-actions').within(() => {
                    cy.contains('Sign in').click({force: true})
              })
        })
        cy.contains('Wish Lists').click({force: true})
        cy.get('.button').contains('New Wish List').click()
        cy.get('#wishlistname').then(()=>{
            var name = 'Test List'
            cy.get('#wishlistname').type(name)
            cy.get('.form-actions').contains('Create Wish List').click()
            cy.get('.table-tbody').should(($p)=>{
                expect($p).to.contain(name)
            })
        })
        cy.get('.button').contains('New Wish List').click()
        cy.get('#wishlistname').then(()=>{
            var name = 'Test List2'
            cy.get('#wishlistname').type(name)
            cy.get('.form-actions').contains('Create Wish List').click()
            cy.get('.table-tbody').should(($p)=>{
                expect($p).to.contain(name)
            })
        })
        cy.contains('Delete All').click()
        cy.get('.alertBox')
        .should(($p)=>{
                expect($p).to.contain('You have no Wish Lists, add one now.')
            })
    })