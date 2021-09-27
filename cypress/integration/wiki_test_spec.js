describe('My First Test', () => {
    it('Visits wikipedia', () => {
      cy.visit('https://www.wikipedia.org/')
      cy.get('#searchInput')
        .type('cats')
    cy.get('.pure-button').click()
    // TODO add validation steps
    })
  })


  // TODO add test to detect if languages display
  // cy.contains('English').click()