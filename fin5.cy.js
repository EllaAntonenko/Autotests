import 'cypress-iframe'
it('test', function() { 
cy.visit('https://underwoodammo.com/')
    cy.get("a[href='/login.php']").click({force: true, multiple: true })
    cy.url().should('eq', 'underwoodammo.com/login.php')
  })
  
       
  
