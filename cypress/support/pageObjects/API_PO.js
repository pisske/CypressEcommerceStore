class API_PO {
  getObjects() {
    return cy.request("GET", "https://api.restful-api.dev/objects");
  }
  getObjectsByIds(ids) {
    const queryParams = ids.map((id) => `id=${id}`).join("&");

    return cy.request({
      method: "GET",
      url: `https://api.restful-api.dev/objects?${queryParams}`,
    });
  }
}

export default API_PO;
