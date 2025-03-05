import API_PO from "../../support/pageObjects/API_PO";
import "cypress-plugin-api";
describe("API Test - Update Product", () => {
  const api_PO = new API_PO();

  const updatedProductData = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2022,
      price: 3000,
    },
  };

  it("should update an existing product and verify the response", () => {
    cy.readFile("cypress/fixtures/createdProductId.json").then((data) => {
      const objectId = data.id;

      expect(objectId).to.not.be.undefined;

      api_PO.putProduct(objectId, updatedProductData).then((response) => {
        console.log("Updated Response:", response.body);

        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("name", updatedProductData.name);
        expect(response.body).to.have.property("data");

        expect(response.body.data).to.have.property(
          "year",
          updatedProductData.data.year
        );
        expect(response.body.data).to.have.property(
          "price",
          updatedProductData.data.price
        );
      });
    });
  });
});
