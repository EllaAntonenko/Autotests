// Check the Login page is displayed after clicking the Login button
import 'cypress-iframe'

it('', function(){
    cy.visit('https://underwoodammo.com/become-dealer/')
       cy.contains('LOGIN').click({force: true})
            cy.url().should('eq', 'https://underwoodammo.com/login.php')
            cy.fixture('credentials.json').then((user) => {
                cy.get('#login_email')
                    .type(user[0].email)
                cy.get('#login_pass')
                    .type(user[0].password)
            })
            cy.get('.form-actions').within(() => {
                cy.contains('Sign in').click({force: true})
          })
            cy.get('.navPages-item').eq(5).click()
            cy.wait(5000)
            cy.frameLoaded('.mighty-form > #mf-9525bf96-79d1-4028-8912-5f279fe05821')

})