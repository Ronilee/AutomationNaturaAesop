describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://minegocio.natura.com.mx/ingreso/mx?return_url=')
    cy.get('#usuario').type('4922698')
    cy.get('#password').type('ZXPHACE/')
    cy.get('.btn-login').click()
    cy.get('#sidebar-cycle').click()
    cy.get(':nth-child(1) > .cycle-url').click()
    cy.get('.lpage-title')
    cy.contains('Nueva Venta Directa').should('be.visible');
    
  })
})