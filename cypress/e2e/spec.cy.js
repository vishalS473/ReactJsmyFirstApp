describe('My First Test', () => {
  it('Sample E2E Test', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="Counter"]').should("exist");
    cy.get('[data-testid="SearchForm"]').should("exist");
    cy.get('[data-testid="GenreList"]').should("exist");
  })
});