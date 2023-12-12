describe('Abre aplicativo', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Olá, Angular')
  })

  it('Adicionar tarefa', () => {
    cy.visit('/')
    cy.get('.nav-link').contains('Tarefas').click();
    cy.get('button').contains('Adicionar').click()
    cy.get('button').contains('Cancelar').click()
  })
})
