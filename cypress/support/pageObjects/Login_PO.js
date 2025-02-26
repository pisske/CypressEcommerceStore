class Login_PO {
  visitLoginPage() {
    cy.visit("index.php?rt=account/login");
  }
  fillLoginForm(login_name = "VPisacic", password = "@Test1234") {
    cy.get("#loginFrm_loginname").type(login_name);
    cy.get("#loginFrm_password").type(password);
  }
}

export default Login_PO;
