it('The added product is displayed', function(){
    cy.visit('https://underwoodammo.com/ammo/')
            cy.get('.card-title').eq(0).then(($title)=>{
                var name = $title.text().trim().substring(1)
                cy.contains('View Details').click({force: true})
            cy.get('.productView-title').then(($title2)=>{
                var name2 = $title2.text().trim().substring(1)
                if(name!==name2){
                    throw new Error('Error')
                }  cy.log('ok')
           })
            })
        })
    
    