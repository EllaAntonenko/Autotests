it('Main bsnner', function(){
    cy.visit('https://underwoodammo.com/')
        // cy.get('.heroCarousel-action').contains('Shop All').click({force: true, multiple: true})
        //     cy.url().should('eq', 'https://underwoodammo.com/ammo/')
        //cy.get('.heroCarousel > .slick-next').click()
        cy.contains('Login Or Register').click({force: true})
        })
        

            

