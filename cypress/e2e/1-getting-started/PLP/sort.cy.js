it('Sort', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.get('select').select('Price: Ascending')
         cy.wait(3000)
         for(var y=6; y<11; y++){
            for(var i=5; i<11; i++){
                
                cy.get('.price-text').eq(i).then((item)=> {
                     var price1 = item.text().trim().substring(1)
                         var priceNumb1 = Number(price1)
                         cy.log(priceNumb1)
                            
                                cy.get('.price-text').eq(y).then((item2)=>{
                                    var price2 = item2.text().trim().substring(1)
                                        var priceNumb2 = Number(price2)
                                        cy.log(priceNumb2)
                                        if(priceNumb1!==priceNumb2);
                                        else if(priceNumb1<!priceNumb2) 
                                             
                             { throw new Error('Error')}
                                                  cy.log('Ok')
                                               
                            })
                        
                        })
                    
                 }
         }
            })
        
            
                  
            





    // cy.get('.cart-item-quantity').within(()=>{
    //     cy.contains('Decrease Quantity').click({force: true})
    // })
    // cy.wait(8000)
    // cy.get('.cart-item-value ').eq(0)
    // .then(($el)=>{
    //     var b = $el.text().substring(1)
    //     var price = Number(b)
    //     cy.get('.cart-item-value ').eq(1)
    //     .then(($el)=>{
    //         var j = $el.text().substring(1)
    //         var total = Number(j)
    //     if(total!==price){ throw new Error('Error')
    //     } cy.log('Ok')
    //     })
//     })
// })