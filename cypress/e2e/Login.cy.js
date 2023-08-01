import loginPage from "../support/Login.Page/Login";
const inputan = require("../fixtures/SignUp.json");
const { should } = require("chai");

describe("Test website Magento", () => {
  const LoginPage = new loginPage();
  beforeEach(() => {
    cy.visit("");
  });
  it("Login_Berhasil", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.Valid_email);
    cy.get(LoginPage.password).type(inputan.Valid_password);
    cy.get(LoginPage.BtnSignIn).click();
  });
  it("Login_invalidemail", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.Invalid_email);
    cy.get(LoginPage.password).type(inputan.Valid_password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(LoginPage.msgError).should("be.visible");
  });
  it("Login_invalidpassword", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.Valid_email);
    cy.get(LoginPage.password).type(inputan.Invalid_password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(LoginPage.msgError).should("be.visible");
  });
  it("Login_Emailkosong", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email);
    cy.get(LoginPage.password).type(inputan.Invalid_password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(LoginPage.fieldEmailKosong).should("be.visible");
  });
  it("Login_Passlkosong", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.Valid_email);
    cy.get(LoginPage.password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(LoginPage.fieldPassKosong).should("be.visible");
  });
});
