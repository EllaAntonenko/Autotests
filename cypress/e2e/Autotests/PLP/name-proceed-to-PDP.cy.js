// PDP is displayed after clicking the product name on PLP

it('Product name', function(){
    cy.visit('https://underwoodammo.com/ammo/')
        cy.get('.card-title').eq(1).then(($title)=>{
            var name = $title.text().trim().substring(1)
                cy.get('.card-title').eq(1).click()
        cy.get('.productView-title').then(($title2)=>{
            var name2 = $title2.text().trim().substring(1)
            if(name!==name2){
                throw new Error('Error')
            }  cy.log('ok')
       })
    })
   
   
})
    
            
        