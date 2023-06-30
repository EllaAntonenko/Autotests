//Check the 

it('Subscribe', function(){
    cy.visit('https://underwoodammo.com/ammo/')
            
                cy.get('#nl_email')
                    .type('test+2@yopmail.com')
                cy.get('.form-field').contains('Subscribe').click()
                cy.get('.alertBox').should(($p)=>{
                    expect($p).to.contain('Thank you for joining our mailing list.')

        })
    })
