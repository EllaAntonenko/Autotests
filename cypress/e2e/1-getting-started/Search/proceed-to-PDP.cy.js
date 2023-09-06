// Check the product picture on product result page proceeds to PDP


it('PDP', function(){
    cy.visit('https://underwoodammo.com/search.php?search_query=ammo')
    cy.get('.card-body').eq(2).then(($title)=>{
        var name = $title.text().trim().substring(1)
            cy.get('.card-img-container').eq(2).click()
    cy.get('.productView-title').then(($title2)=>{
        var name2 = $title2.text().trim().substring(1)
        cy.get('.productView-title').should('contain', name2 )
   })
})
})
