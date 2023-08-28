import 'cypress-iframe'

it('test', function() { 
    cy.fixture('users.json').then((user)=>{
        cy.visit(user[0].id, {failOnStatusCode: false})
                cy.contains('Subscribe for Notification').click({force: true})
            cy.iframe('#klaviyo-bis-iframe').find('#email').type(user[0].email)
            cy.iframe('#klaviyo-bis-iframe').contains('Subscribe for Notification').click()
            cy.iframe('#klaviyo-bis-iframe').find('#completed_message').contains("You're in! We'll let you know when it's back.").click()
            cy.iframe('#klaviyo-bis-iframe').contains('Close').click()

        for(let b=1; b<10; b++){
            for(let c=1; c<9; c++){
                if(user[b].id === user[b++].id) {

                    cy.contains('Subscribe for Notification').click({force: true})
                    cy.iframe('#klaviyo-bis-iframe').find('#email').type(user[c++].email)
                    cy.iframe('#klaviyo-bis-iframe').contains('Subscribe for Notification').click()
                    cy.iframe('#klaviyo-bis-iframe').find('#completed_message').contains("You're in! We'll let you know when it's back.").click()
                    cy.iframe('#klaviyo-bis-iframe').contains('Close').click()
                    
                }{
                    cy.visit(user[b++].id, {failOnStatusCode: false})
                cy.contains('Subscribe for Notification').click({force: true})
            cy.iframe('#klaviyo-bis-iframe').find('#email').type(user[c].email)
            cy.iframe('#klaviyo-bis-iframe').contains('Subscribe for Notification').click()
            cy.iframe('#klaviyo-bis-iframe').find('#completed_message').contains("You're in! We'll let you know when it's back.").click()
            cy.iframe('#klaviyo-bis-iframe').contains('Close').click()
                }
            
}
          }
       })
  })

