import "cypress-plugin-api";
import API_PO from "../../support/pageObjects/API_PO";

describe("Test DELETE Product API with Page Object Model", () => {
  const api_PO = new API_PO();

  it("should delete the product and verify the response", () => {
    cy.readFile("cypress/fixtures/createdProductId.json").then((data) => {
      const createdProductId = data.id;

      api_PO.deleteProduct(createdProductId).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
