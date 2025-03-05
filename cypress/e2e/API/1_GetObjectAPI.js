import API_PO from "../../support/pageObjects/API_PO";
import "cypress-plugin-api";
describe("Test API for Objects", () => {
  const api_PO = new API_PO();

  it("should return a 200 status and validate the response structure", () => {
    api_PO.getObjects().then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.be.an("array");

      const firstObject = response.body[0];
      expect(firstObject).to.have.property("id");
      expect(firstObject).to.have.property("name");
      expect(firstObject).to.have.property("data");

      if (firstObject.data !== null) {
        expect(firstObject.data).to.be.an("object");
      }
    });
  });

  it("should verify each object has a name and a valid id", () => {
    api_PO.getObjects().then((response) => {
      response.body.forEach((obj) => {
        expect(obj).to.have.property("id").that.is.a("string");
        expect(obj).to.have.property("name").that.is.a("string");
      });
    });
  });
  it("should verify how many objects are in the array", () => {
    api_PO.getObjects().then((response) => {
      expect(response.body).to.have.length(13);
    });
  });
});
