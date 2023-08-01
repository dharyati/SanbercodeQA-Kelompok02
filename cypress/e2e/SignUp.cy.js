import SignUpPage from "../support/SignUp/SignUp";
const inputan = require("../fixtures/SignUp.json");
const { should } = require("chai");

describe("Test website Magento", () => {
  const signUpPage = new SignUpPage();
  beforeEach(() => {
    cy.visit("");
  });
  it("Signup_Email_tidak_diinputkan", () => {
    cy.get(signUpPage.createBtn).click();
    cy.get(signUpPage.firstName).type(inputan.FisrtName);
    cy.get(signUpPage.lastName).type(inputan.LastName);
    cy.get(signUpPage.email);
    cy.get(signUpPage.pass).type(inputan.Valid_password);
    cy.get(signUpPage.confirmPassword).type(inputan.Confirm_password);
    cy.get(signUpPage.btnCreate).click();
    cy.get(signUpPage.fieldEmailKosong).should("be.visible");
  });
  it("Signup_pass_confirmpass_tidak_diinputkan", () => {
    cy.get(signUpPage.createBtn).click();
    cy.get(signUpPage.firstName).type(inputan.FisrtName);
    cy.get(signUpPage.lastName).type(inputan.LastName);
    cy.get(signUpPage.email).type(inputan.Valid_email);
    cy.get(signUpPage.pass);
    cy.get(signUpPage.confirmPassword);
    cy.get(signUpPage.btnCreate).click();
    cy.get(signUpPage.fieldPassKosong).should("be.visible");
    cy.get(signUpPage.fieldConfirmpassKosong).should("be.visible");
  });
  it("Success_SignUp", () => {
    cy.get(signUpPage.createBtn).click();
    cy.get(signUpPage.firstName).type(inputan.FisrtName);
    cy.get(signUpPage.lastName).type(inputan.LastName);
    cy.get(signUpPage.email).type(inputan.Valid_email);
    cy.get(signUpPage.pass).type(inputan.Valid_password);
    cy.get(signUpPage.confirmPassword).type(inputan.Confirm_password);
    cy.get(signUpPage.btnCreate).click();
  });
  it("Signup_Email_Sudah_Terdaftar", () => {
    cy.get(signUpPage.createBtn).click();
    cy.get(signUpPage.firstName).type(inputan.FisrtName);
    cy.get(signUpPage.lastName).type(inputan.LastName);
    cy.get(signUpPage.email).type(inputan.Valid_email);
    cy.get(signUpPage.pass).type(inputan.Valid_password);
    cy.get(signUpPage.confirmPassword).type(inputan.Confirm_password);
    cy.get(signUpPage.btnCreate).click();
    cy.get(signUpPage.errorMsg).should("be.visible");
  });
  it("Signup_Firstname_tidakdiInputkan", () => {
    cy.get(signUpPage.createBtn).click();
    cy.get(signUpPage.firstName);
    cy.get(signUpPage.lastName).type(inputan.LastName);
    cy.get(signUpPage.email).type(inputan.Valid_email);
    cy.get(signUpPage.pass).type(inputan.Valid_password);
    cy.get(signUpPage.confirmPassword).type(inputan.Confirm_password);
    cy.get(signUpPage.btnCreate).click();
    cy.get(signUpPage.fieldFirstNameKosong).should("be.visible");
  });
  it("Signup_Firstname_tidakdiInputkan", () => {
    cy.get(signUpPage.createBtn).click();
    cy.get(signUpPage.firstName).type(inputan.FisrtName);
    cy.get(signUpPage.lastName);
    cy.get(signUpPage.email).type(inputan.Valid_email);
    cy.get(signUpPage.pass).type(inputan.Valid_password);
    cy.get(signUpPage.confirmPassword).type(inputan.Confirm_password);
    cy.get(signUpPage.btnCreate).click();
    cy.get(signUpPage.fieldLastNameKosong).should("be.visible");
  });
});
