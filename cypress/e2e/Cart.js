import Cart_PO from "../support/pageObjects/Cart_PO";

import Login_PO from "../support/pageObjects/Login_PO";

describe("Add Product to Basket", () => {
  const productPage_PO = new Cart_PO();
  const login_PO = new Login_PO();

  before(function () {
    cy.fixture("productName").then(function (data) {
      globalThis.data = data;
    });
  });

  it("should add a product to the basket and verify it", () => {
    login_PO.visitLoginPage();
    login_PO.fillLoginForm();
    cy.get("#loginFrm > fieldset > .btn").click();
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    globalThis.data.productName.forEach(function (product) {
      productPage_PO.addProductToBasket(product);
    });

    cy.get(".dropdown-toggle > .fa").click();
    globalThis.data.productName.forEach(function (product) {
      cy.get(".contentpanel").contains(product).should("exist");
    });
    cy.get("#cart_checkout1").click();
    cy.get("#checkout_btn").click();
    cy.contains("Your Order Has Been Processed!").should("be.visible");
  });
});
