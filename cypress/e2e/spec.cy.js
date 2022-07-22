/* eslint-disable no-undef */
describe('empty spec', () => {
  it('test cypress', () => {
    
    cy.visit('http://localhost:3000')
    cy.get('.App-header').contains('src/App.js')
  })
})