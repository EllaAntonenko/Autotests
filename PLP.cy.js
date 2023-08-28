//const { text } = require("stream/consumers")

it('Product Listing Page', function(){
    cy.visit('https://underwoodammo.com/ammo/')
    //sort product
    cy.get('select').select('Price: Ascending')

    var arr = [ ]
    cy.get('.price-text').then((item)=> {
        
       var re = item.text().trim().substring(1)
       //var a = Array.from(re)
       
       var rep = /\B(?=(\d{3})+(?!\d))/g; //регулярное выражение
       var b = re.replace(/,/g, ", ")
var newstr = re.toString().replace(rep, ',')
       
      cy.log(newstr)

       
        // var res = actualText.trim().slice(1)
        //     var res1 = Number(res)
        
        // var arr = [ ]
        // arr.push(res1)
        // cy.log(arr);
        // for(var i=0; i<25; i++){
        //     if(res[i]=== res[i+1] || res[i] < res[i+1] ){
        //         continue
        //     } {
        //         cy.log('false')
        //     }
        // }
        
    })
    
   // cy.log(arr)



})