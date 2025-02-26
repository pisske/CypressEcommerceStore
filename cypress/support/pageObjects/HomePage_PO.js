class HomePage_PO {
  visitHomePage() {
    cy.visit(Cypress.env("automation_store"));
  }
}

export default HomePage_PO;
