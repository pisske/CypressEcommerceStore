import API_PO from "../../support/pageObjects/API_PO";
import "cypress-plugin-api";
describe("API Test for Product", () => {
  const api_PO = new API_PO();

  const expectedProduct = {
    id: "7",
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  it("should fetch the correct product details", () => {
    api_PO.getProduct("7").then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property("id", expectedProduct.id);
      expect(response.body).to.have.property("name", expectedProduct.name);
      expect(response.body.data).to.have.property(
        "year",
        expectedProduct.data.year
      );

      expect(response.body.data).to.deep.equal(expectedProduct.data);
    });
  });
});
