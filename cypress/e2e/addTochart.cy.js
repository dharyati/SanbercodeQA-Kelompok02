import addToChart from "../support/AddtoChart/Addtochart";
import loginPage from "../support/Login.Page/Login";
const inputan = require("../fixtures/SignUp.json");
const { should } = require("chai");

describe("Test website Magento", () => {
  const LoginPage = new loginPage();
  const AddtoChart = new addToChart();
  beforeEach(() => {
    cy.visit("");
  });
  it("Add_To_Cart_Without_Login", () => {
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size).click();
    cy.get(AddtoChart.color).click();
    cy.get(AddtoChart.BtnAddToCart).click();
  });
  it("Add_To_Cart_With_Login", () => {
    cy.get(LoginPage.signInBtn).click();
    cy.get(LoginPage.email).type(inputan.New_Email);
    cy.get(LoginPage.password).type(inputan.New_Password);
    cy.get(LoginPage.BtnSignIn).click();
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size).click();
    cy.get(AddtoChart.color).click();
    cy.get(AddtoChart.BtnAddToCart).click();
  });
  it("No_Pick_Size", () => {
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size);
    cy.get(AddtoChart.color).click();
    cy.get(AddtoChart.BtnAddToCart).click();
    // cy.contains(AddtoChart.NoPickSize, "This is a required field.").should("be.visible");
  });
  it("No_Pick_Color", () => {
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size).click();
    cy.get(AddtoChart.color);
    cy.get(AddtoChart.BtnAddToCart).click();
    //   // cy.contains(AddtoChart.NoPickSize, "This is a required field.").should("be.visible");
  });
});
