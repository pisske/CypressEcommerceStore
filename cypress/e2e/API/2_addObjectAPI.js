import API_PO from "../../support/pageObjects/API_PO";
import "cypress-plugin-api";
describe("API Test for POST Product", () => {
  const api_PO = new API_PO();

  const productData = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  it("should create a new product and verify the response", () => {
    api_PO.createProduct(productData).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property("name", productData.name);
      expect(response.body).to.have.property("data");

      expect(response.body.data).to.have.property(
        "year",
        productData.data.year
      );
      expect(response.body.data).to.have.property(
        "price",
        productData.data.price
      );
      expect(response.body.data).to.have.property(
        "CPU model",
        productData.data["CPU model"]
      );
      expect(response.body.data).to.have.property(
        "Hard disk size",
        productData.data["Hard disk size"]
      );
      const createdProductId = response.body.id;
      cy.writeFile("cypress/fixtures/createdProductId.json", {
        id: createdProductId,
      });

      cy.log("Created Product ID: " + createdProductId);
    });
  });
});
