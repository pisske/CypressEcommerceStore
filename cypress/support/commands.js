Cypress.Commands.add(
  "registration",
  (
    first_name,
    last_name,
    email,
    address = "Washington street",
    city = "Novi Sad",
    zone_id = "Bristol",
    post_code = "21000",
    country = "Sweden",
    loginname = "Vladimir Pisacic",
    password = "@Test1234"
  ) => {
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
);

Cypress.Commands.add("navigate_to_automaton_store_home_page", () => {
  cy.visit("/");
});
