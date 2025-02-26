class SignUP_PO {
  visitSignUpPage() {
    cy.visit("/index.php?rt=account/create");
  }
  fillSignUpForm(
    first_name,
    last_name,
    email,
    loginname,
    address = "Washington street",
    city = "Novi Sad",
    zone_id = "Angus",
    post_code = "21000",
    country = "United Kingdom",
    password = "@Test1234"
  ) {
    cy.get("#AccountFrm_firstname").type(first_name);
    cy.get("#AccountFrm_lastname").type(last_name);
    cy.get("#AccountFrm_email").type(email);
    cy.get("#AccountFrm_address_1").type(address);
    cy.get("#AccountFrm_city").type(city);
    cy.get("#AccountFrm_zone_id").select(zone_id);
    cy.get("#AccountFrm_postcode").type(post_code);
    cy.get("#AccountFrm_country_id").select(country);
    cy.get("#AccountFrm_loginname").type(loginname);
    cy.get("#AccountFrm_password").type(password);
    cy.get("#AccountFrm_confirm").type(password);
  }
  checkNewsLetter() {
    cy.get("#AccountFrm_newsletter1").check();
  }
  checkAgreeTerms() {
    cy.get("#AccountFrm_agree").check();
  }
  submitForm() {
    cy.get(".col-md-2 > .btn").click();
  }
  verifyAccountCration() {
    cy.contains("Your Account Has Been Created!").should("be.visible");
  }
  verifyWrongEmail() {
    cy.contains("Email Address does not appear to be valid!").should(
      "be.visible"
    );
  }
}

export default SignUP_PO;
