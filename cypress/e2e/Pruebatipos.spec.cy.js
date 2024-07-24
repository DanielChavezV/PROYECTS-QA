describe ('Tipos de localizadores', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  
    it('Obtener por medio de un tag', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('input')
    })
  
    it('Obtener por medio de un atributo', ()=>{
        cy.get('[placeholder="First Name"]')
    })
  
    it('Obtener por medio de un id', ()=>{
        cy.get('#firstName')
    })
  
    it('Obtener por medio de una clase', ()=>{
        cy.get('.mr-sm-2.form-control')
    })

    it( "Usando Contains",  () =>{         

        //Para encntrar un elemento q contenga cierto texto           
        
        // cy.visit('/automation-practice-form')         
        
        // cy.get('input[placeholder="First Name"]')       
        
        cy.contains('Reading')       
        
        cy.get('.header-wrapper').contains('Widgets')
    })
    
    it.only('Interactuando con los dropdown(select)', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')

        cy.get('select').select(2)

        cy.get('select').select('opel').should('have.value', 'opel')

        cy.get('select').select('Opel').should('have.value', 'opel')
    })
})
