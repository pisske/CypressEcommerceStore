import Chance from "chance";

import HomePage_PO from "../../support/pageObjects/HomePage_PO";
import SignUP_PO from "../../support/pageObjects/SignUP_PO";
const chance = new Chance();
describe("Sign up with valid credential ", () => {
  it("should validate the checkbox is checked and click continue", () => {
    const homepage_PO = new HomePage_PO();

    homepage_PO.visitHomePage();
    cy.xpath('//*[@id="customer_menu_top"]/li/a').click();

    cy.get("#accountFrm_accountregister").should("be.checked");
    cy.get("#accountFrm > fieldset > .btn").click();
  });

  it("successfull singup with rundom data", () => {
    const signUpPage_PO = new SignUP_PO();

    const firstName = chance.first();
    const lastName = chance.last();
    const email = chance.email();
    const loginname = chance.string({
      length: 8,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    });

    Cypress.env("loginname", loginname);
    Cypress.env("password", "@Test1234");

    signUpPage_PO.visitSignUpPage();
    signUpPage_PO.fillSignUpForm(firstName, lastName, email, loginname);
    signUpPage_PO.checkNewsLetter();
    signUpPage_PO.checkAgreeTerms();
    signUpPage_PO.submitForm();
    signUpPage_PO.verifyAccountCration();
    cy.get(".mb40 > .btn").click();
  });

  it("Unsuccessfull singup with rundom data", () => {
    const signUpPage_PO = new SignUP_PO();
    const firstName = chance.first();
    const lastName = chance.last();
    const invalindEmail = "www.petar.co";
    const loginname = chance.string({
      length: 8,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    });

    signUpPage_PO.visitSignUpPage();
    signUpPage_PO.fillSignUpForm(firstName, lastName, invalindEmail, loginname);
    signUpPage_PO.checkNewsLetter();
    signUpPage_PO.checkAgreeTerms();
    signUpPage_PO.submitForm();
    signUpPage_PO.verifyWrongEmail();
  });
});
