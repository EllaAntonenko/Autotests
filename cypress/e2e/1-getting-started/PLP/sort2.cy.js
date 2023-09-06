it('Sort', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    cy.get('select').select('Price: Ascending')
         cy.wait(3000)
         
            for(var i=5; i<11; i++){
                
                cy.get('.price-text').eq(i).then((item)=> {
                     var price1 = item.text().trim().substring(1)
                         var priceNumb1 = Number(price1)
                         cy.log(priceNumb1)
                            
                                cy.get('.price-text').eq(i--).then((item2)=>{
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
         
            })
        