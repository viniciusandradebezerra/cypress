/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import HookForm from '../../src/HookForm'

describe('my form', () => {
  it('mounts the form', () => {
    cy.mount(<HookForm />)
  })

  it('requires name', () => {
    cy.mount(<HookForm />)
    cy.get('[data-testid="name"]')
  })

  it('test submit', () => {
    cy.mount(<HookForm />)
    cy.get('form').submit()
  })
})