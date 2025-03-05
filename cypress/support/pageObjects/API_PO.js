class API_PO {
  getObjects() {
    return cy.api("GET", "https://api.restful-api.dev/objects");
  }

  getObjectsByIds(ids) {
    const queryParams = ids.map((id) => `id=${id}`).join("&");

    return cy.api({
      method: "GET",
      url: `https://api.restful-api.dev/objects?${queryParams}`,
    });
  }

  getProduct(id) {
    return cy.api({
      method: "GET",
      url: `https://api.restful-api.dev/objects/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  createProduct(productData) {
    return cy.api({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: productData,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  putProduct(id, updatedProductData) {
    return cy.api({
      method: "PUT",
      url: `https://api.restful-api.dev/objects/${id}`,
      body: updatedProductData,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  deleteProduct(id) {
    return cy.api({
      method: "DELETE",
      url: `https://api.restful-api.dev/objects/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  patchProduct(id, updateProductData) {
    return cy.api({
      method: "PATCH",
      url: `https://api.restful-api.dev/objects/${id}`,
      body: updateProductData,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  deleteMockProduct(id) {
    // Set up the interceptor for the DELETE request
    cy.intercept("DELETE", `https://api.restful-api.dev/objects/${id}`).as(
      "deleteProductRequest"
    );

    // Perform the DELETE request
    return cy
      .api({
        method: "DELETE",
        url: `https://api.restful-api.dev/objects/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // After the DELETE request is made, wait for the intercepted request
        cy.wait("@deleteProductRequest").then((interception) => {
          // Here you can perform assertions on the intercepted response
          console.log("Intercepted Response:", interception.response);
          expect(interception.response.statusCode).to.eq(200);
        });

        // Return the original response after handling the intercept
        return response; // Returning the response for further assertions or processing if necessary
      });
  }
}

export default API_PO;
