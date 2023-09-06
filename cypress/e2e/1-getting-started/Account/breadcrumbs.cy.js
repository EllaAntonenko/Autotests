// Check the breadcrumbs on My Account page proceed to the corresponding pages

it('Breadcrumbs on My Account page', function() { 
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
          cy.get('.breadcrumb').eq(0).click()
          cy.url().should('eq', 'https://underwoodammo.com/')
          cy.get('#icon-Person').click({force: true})
          cy.get('.breadcrumb').eq(1).click()
          cy.url().should('eq', 'https://underwoodammo.com/account.php?action=order_status')
          cy.get('#icon-Person').click({force: true})
          cy.get('.breadcrumb').eq(2).click()
          cy.url().should('eq', 'https://underwoodammo.com/account.php?action=order_status')
          // for(i=0; i<7; i++){
          //   cy.get('.navBar-item').eq(i).click()
            //cy.get('.page-heading').should('eq', '')
          }
)
        
        