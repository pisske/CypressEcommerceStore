import Cart_PO from "../../support/pageObjects/Cart_PO";

import Login_PO from "../../support/pageObjects/Login_PO";

describe("Add Product to Basket", () => {
  const productPage_PO = new Cart_PO();
  const login_PO = new Login_PO();

  before(function () {
    cy.fixture("productName").then(function (data) {
      globalThis.data = data;
    });

    const loginname = Cypress.env("loginname") || "VPisacic";
    const password = Cypress.env("password");
    cy.loginSession();
  });

  it("should add a product to the basket and verify it", () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/account");

    cy.contains("My Account", { timeout: 20000 }).should("be.visible");

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
