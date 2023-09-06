// PDP page is displayed after clicking the Continue Shopping link on success pop-up

it('Continue Shopping link', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.get('.card-title').eq(1).then(($title)=>{
        var name = $title.text().trim()
        cy.log(name)
            cy.get('.card-title').eq(1).click()
            cy.contains('Add to Cart').click()
            cy.contains('Continue Shopping').click()
            cy.get('#previewModal').should('have.attr', 'aria-hidden').and('eq', 'true')
        
   
})
})