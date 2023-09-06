// Check the footer links proceed to the corresponding pages

it('Footer links', function(){
    cy.visit('https://underwoodammo.com/')
                    cy.contains('Shipping Restrictions').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/shipping-restrictions/')
        
                    cy.contains('Returns & Exchanges').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/returns-exchanges/')

                    cy.contains('Terms of Use').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/terms-of-use/')

                    cy.get('.footer-links').within(()=>{
                        cy.contains('Privacy Policy').click({force: true})
                    cy.url().should('eq', 'https://underwoodammo.com/privacy-policy/')
                    })
                    
})