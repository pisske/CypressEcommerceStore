import API_PO from "../../support/pageObjects/API_PO";
import "cypress-plugin-api";

describe("API Single User", () => {
  const accessToken = process.env.ACCESS_TOKEN;
  const refreshToken = process.env.REFRESH_TOKEN;
  const userId = 3;
  const api_PO = new API_PO();

  it("should fetch the correct user details", () => {
    api_PO.getSingleUser(accessToken, userId).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property("id", userId);
      expect(response.body).to.have.property("firstName");
      expect(response.body).to.have.property("email");
    });
  });
});
