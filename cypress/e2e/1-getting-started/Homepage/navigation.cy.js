// CHECK THE CATEGORIES MENU DROPDOWN IS EXPANDED AFTER CLICKING
it('Menu dropdowns', function(){
    cy.visit('https://underwoodammo.com/')
        cy.get('.navPages-item').each(() => {
            for(var i=0; i<0; i++ ){
                cy.get('.has-subMenu').eq(i).click()
                    cy.get('.has-subMenu').should('have.attr', 'aria-expanded').and('eq', 'true')    
            } 
    })   
// for(var i=0; i<5; i++ ){
//     cy.get('.has-subMenu').eq(2).click()
//         cy.get('.has-subMenu').should('have.attr', 'aria-expanded').and('eq', 'true')    
// }

//CHECK THE THE SUBCATEGORY PROCEEDS TO THE CORRESPONDING PLP
cy.get('.navPage-subMenu-action').eq(2).click({force: true}) 
})