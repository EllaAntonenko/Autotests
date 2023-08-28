
// преобразить файл в json формат
var xlsx = require("xlsx")
var dataPathExcel = 'mytab.xlsx'
var wb = xlsx.readFile(dataPathExcel)
var sheetName = wb.SheetNames[0]
var sheetValue = wb.Sheets[sheetName]
var excelData = xlsx.utils.sheet_to_json(sheetValue)
 var arrays = excelData.slice()
console.log(typeof arrays)







// Object.keys(arrays).forEach(function(i) {
//     console.log(arrays[i].NAME);
//   })
//console.log(arrays[1].SKU)
//let excelData = {"SURNAME": "Smith", "EMAIL": "sminderfamily.2009@gmail.com"}
// let data4 = JSON.stringify(excelData)
//console.log(excelData.EMAIL)
// var c = ['email', 'sku', 'name']
// var b = [ ]
// for (let i = 0; i < c.length; i++) {
//     if(i == 'sku'){
//         b.push(i)

//     }
//     return b 
// }
// arrays.forEach((item) => {
//     if(item == 'email'){
//         b.push(item)
//     }
//})
// var b = ['"SKU"', 'email' ]

// var a = arrays.filter(el => el == '{')

// map( function(element) {
//     element.join(",").join("\n")
// })
// it('test', function() { 
//     cy.visit('https://underwoodammo.com/')
    
// })

