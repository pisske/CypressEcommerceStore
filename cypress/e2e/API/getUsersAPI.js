import API_PO from "../../support/pageObjects/API_PO";
import "cypress-plugin-api";
describe("Fetch Users API Test", () => {
  const accessToken = process.env.ACCESS_TOKEN;
  const refreshToken = process.env.REFRESH_TOKEN;

  const userAPI = new API_PO();

  it("should fetch users and refresh token if expired", () => {
    userAPI.fetchUsers(accessToken).then((response) => {
      if (response.status === 401) {
        cy.log("Access token expired, refreshing token...");

        userAPI.refreshAccessToken(refreshToken).then((refreshResponse) => {
          const newAccessToken = refreshResponse.body.accessToken;

          userAPI.fetchUsers(newAccessToken).then((finalResponse) => {
            n;
            expect(finalResponse.status).to.eq(200);
            expect(finalResponse.body).to.have.property("users");
            re;
          });
        });
      } else {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("users");
      }
    });
  });
});
