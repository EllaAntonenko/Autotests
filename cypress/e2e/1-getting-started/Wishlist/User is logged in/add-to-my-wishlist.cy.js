// The product is displayed on Wish list page after logging in and clicking the Wish List icon on PDP

it('Add to Wish list', function() { 
    cy.visit('https://underwoodammo.com/login.php')        
        cy.fixture('credentials.json').then((user) => {
            cy.get('#login_email')
                .type(user[0].email)
            cy.get('#login_pass')
                .type(user[0].password)
        })
            cy.get('.form-actions').within(() => {
                cy.contains('Sign in').click({force: true})
          })
                    cy.get('.breadcrumbs').contains('Your Account')
                    cy.get('.navPage-subMenu-action').eq(2).click({force: true}) 
                    cy.get('.card-title').eq(1).then(($title)=>{
                        var name = $title.text().trim().substring(1)
                            cy.get('.card-title').eq(1).click()
        cy.get('#icon-Heart-Outlined').click({force: true})
        cy.get('#wishlist-dropdown > :nth-child(1) > .button').click()
        cy.get('.card-title').eq(0).then(($title2)=>{
            var name2 = $title2.text().trim().substring(1)
            if(name!==name2){
                throw new Error('Error')
            }  cy.log('ok')
        })
    })
        })
        
      
    