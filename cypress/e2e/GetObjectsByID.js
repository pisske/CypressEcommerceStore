import API_PO from "../support/pageObjects/API_PO";

describe("Fetch Objects by ID", () => {
  const api_PO = new API_PO();

  it("should fetch objects by specific dynamic IDs", () => {
    const ids = [3, 5, 10];

    api_PO.getObjectsByIds(ids).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.length(ids.length);

      response.body.forEach((obj) => {
        expect(ids).to.include(Number(obj.id));
      });
    });
  });
});
