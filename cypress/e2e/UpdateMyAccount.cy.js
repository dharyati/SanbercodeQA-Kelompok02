import loginPage from "../support/Login.Page/Login";
import UpdateAccount from "../support/UpdateAccount/UpdateAccount";
const inputan = require("../fixtures/SignUp.json");
const { should } = require("chai");

describe("Test website Magento", () => {
  const updateAccount = new UpdateAccount();
  const LoginPage = new loginPage();
  beforeEach(() => {
    cy.visit("");
  });
  it("Update_Email", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.New_Email);
    cy.get(LoginPage.password).type(inputan.New_Password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(updateAccount.Btndropdown).click();
    cy.get(updateAccount.BtnMyAccount).click({ force: true });
    cy.get(updateAccount.EditAccount).click();
    cy.get(updateAccount.changeEmail).click();
    cy.get(updateAccount.inputNewEmail).clear().type(inputan.New_Email);
    cy.get(updateAccount.CurrentPass).type(inputan.Valid_password);
    cy.get(updateAccount.BtnSave).click();
  });
  it("Update_password", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.New_Email);
    cy.get(LoginPage.password).type(inputan.New_Password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(updateAccount.Btndropdown).click();
    cy.get(updateAccount.BtnMyAccount).click({ force: true });
    cy.get(updateAccount.changePassword).click();
    cy.get(updateAccount.CurrentPass).type(inputan.Valid_password);
    cy.get(updateAccount.New_Passs).type(inputan.New_Password);
    cy.get(updateAccount.confirm_pass).type(inputan.New_Password);
    cy.get(updateAccount.BtnSave).click();
  });
  it("Tidak_Input_NewEmail", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.New_Email);
    cy.get(LoginPage.password).type(inputan.New_Password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(updateAccount.Btndropdown).click();
    cy.get(updateAccount.BtnMyAccount).click({ force: true });
    cy.get(updateAccount.EditAccount).click();
    cy.get(updateAccount.changeEmail).click();
    cy.get(updateAccount.inputNewEmail).clear();
    cy.get(updateAccount.CurrentPass).type(inputan.New_Password);
    cy.get(updateAccount.BtnSave).click();
    cy.get(updateAccount.EmailKosong).should("be.visible");
  });
  it("Salah_Pass", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.New_Email);
    cy.get(LoginPage.password).type(inputan.New_Password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(updateAccount.Btndropdown).click();
    cy.get(updateAccount.BtnMyAccount).click({ force: true });
    cy.get(updateAccount.EditAccount).click();
    cy.get(updateAccount.changeEmail).click();
    cy.get(updateAccount.inputNewEmail).clear().type(inputan.New_Email);
    cy.get(updateAccount.CurrentPass).type(inputan.Invalid_password);
    cy.get(updateAccount.BtnSave).click();
    cy.get(updateAccount.msgError).should("be.visible");
  });
});
