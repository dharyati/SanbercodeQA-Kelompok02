import loginPage from "../support/Login.Page/Login";
import Logout from "../support/Logout/Logout";
const inputan = require("../fixtures/SignUp.json");
const { should } = require("chai");

describe("Test website Magento", () => {
  const LoginPage = new loginPage();
  const logout = new Logout();
  beforeEach(() => {
    cy.visit("");
  });
  it("Logout_Berhasil", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.New_Email);
    cy.get(LoginPage.password).type(inputan.New_Password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(logout.Btndropdown).click();
    cy.get(logout.BtnLogout).click({ force: true });
  });
});
