// Check the error message is displayed after entering invalid amount (less than 25 or more than 2,650) 
// 'Add Gift Certificate to Cart' button


it('Add Certificate to cart with invalid amount', function(){
    cy.visit('https://underwoodammo.com/giftcertificates.php')
        cy.get('#from_name').type('Test')
        cy.get('#from_email').type('qatest@yopmail.com')
        cy.get('#to_name').type('Test2')
        cy.get('#to_email').type('qatestqa@yopmail.com')
        cy.get('#certificate_amount').type('24.50')
        cy.get('[type="radio"]').check('Birthday.html', {force: true})
        cy.get('[type="checkbox"]').check({ force: true })

            cy.get('#gift-certificate-submit').click()
                cy.get('.form-inlineMessage').should('contain', 'You must enter a certificate amount between $25.00 and $2,650.00')         
 
})