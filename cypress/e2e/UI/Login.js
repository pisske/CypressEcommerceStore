import Login_PO from "../../support/pageObjects/Login_PO";

describe("Login with session", () => {
  before(() => {
    const loginname = Cypress.env("loginname") || "VPisacic";
    const password = Cypress.env("password");

    cy.loginSession();

    //   const login_PO = new Login_PO();
    //   login_PO.visitLoginPage();
    //   login_PO.fillLoginForm(loginname, password);

    //   cy.get("#loginFrm > fieldset > .btn").click();

    //   cy.getCookie("AC_SF_8CEFDA09D5").should("exist");
    // });
  });

  it("should successfully log in and check account message", () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/account");

    cy.contains("My Account", { timeout: 20000 }).should("be.visible");
  });
});
