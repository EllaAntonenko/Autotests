// Check the Success pop-up is closed after clicking the Close icon


it('Close icon on success pop-up', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.get('.card-title').eq(1).then(($title)=>{
        var name = $title.text().trim()
        cy.log(name)
            cy.get('.card-title').eq(1).click()
            cy.contains('Add to Cart').click()
            cy.wait(3000)
            cy.get('#previewModal > .modal-close > [aria-hidden="true"]').click({force: true})
            cy.get('#previewModal').should('have.attr', 'aria-hidden').and('eq', 'true')
        
   
   
})
})