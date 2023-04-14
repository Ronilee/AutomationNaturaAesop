describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://minegocio.natura.com.pe')
    cy.get('#username').type('2645330')
    cy.get('#password').type('Natura@10')
    cy.get('#signInButton').click()
    cy.get('close-poll').click()
    cy.get('sidebar-personate').click()
    cy.get(':nth-child(1) > .cycle-url').click()
    cy.get('.lpage-title')
    cy.contains('Nueva Venta Directa').should('be.visible');
  })
})