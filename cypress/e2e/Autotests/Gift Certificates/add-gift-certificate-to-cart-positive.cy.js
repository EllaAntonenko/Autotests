// Check the Gift Certificate is added to the cart after entering valid info into all required fields
// and clicking the 'Add Gift Certificate to Cart' button


it('Add Certificate to cart', function(){
    cy.visit('https://underwoodammo.com/giftcertificates.php')
        cy.get('#from_name').type('Test')
        cy.get('#from_email').type('qatest@yopmail.com')
        cy.get('#to_name').type('Test2')
        cy.get('#to_email').type('qatestqa@yopmail.com')
        cy.get('#certificate_amount').type('1000')
        cy.get('[type="radio"]').check('Birthday.html', {force: true})
        cy.get('[type="checkbox"]').check({ force: true })

            cy.get('#gift-certificate-submit').click()
                cy.url().should('eq', 'https://underwoodammo.com/cart.php')
                    cy.get('.cart').should('have.attr', 'data-cart-quantity').and('eq', '1')  
                        cy.get('.cart-item-name').should('contain', '$1,000.00 Gift Certificate')
 
})
