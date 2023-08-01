import addToChart from "../support/AddtoChart/Addtochart";
import checkout from "../support/Checkout/Checkout";
import loginPage from "../support/Login.Page/Login";
const inputan = require("../fixtures/SignUp.json");
const { should } = require("chai");

describe("Test website Magento", () => {
  const LoginPage = new loginPage();
  const AddtoChart = new addToChart();
  const Checkout = new checkout();
  beforeEach(() => {
    cy.visit("");
  });
  it("Add_To_Cart", () => {
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size).click();
    cy.get(AddtoChart.color).click();
    cy.get(AddtoChart.Quantity).clear().type("{upArrow}{upArrow}{upArrow}{upArrow}");
    cy.get(AddtoChart.BtnAddToCart).click();
    cy.wait(5000);
    cy.contains("You added").should("be.visible");
  });
  it("Success_Update_Product", () => {
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size).click();
    cy.get(AddtoChart.color).click();
    cy.get(AddtoChart.Quantity).clear().type("{upArrow}{upArrow}{upArrow}{upArrow}");
    cy.get(AddtoChart.BtnAddToCart).click();
    cy.wait(5000);
    cy.contains("You added").should("be.visible");
    cy.get(Checkout.CheckoutBtn).click({ force: true });
    cy.get(AddtoChart.upDateProduct).click({ force: true });
    cy.get(AddtoChart.Edit).click({ force: true });
    cy.get(AddtoChart.color2).click({ force: true });
    cy.get(AddtoChart.BtnUpdate).click({ force: true });
    cy.get(AddtoChart.InfoUpdateSuccess).should("be.visible");
  });
  it("Failed_Update_Product", () => {
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size).click();
    cy.get(AddtoChart.color).click();
    cy.get(AddtoChart.Quantity).clear().type("{upArrow}{upArrow}{upArrow}{upArrow}");
    cy.get(AddtoChart.BtnAddToCart).click();
    cy.wait(5000);
    cy.contains("You added").should("be.visible");
    cy.get(Checkout.CheckoutBtn).click({ force: true });
    cy.get(AddtoChart.upDateProduct).click({ force: true });
    cy.get(AddtoChart.Edit).click({ force: true });
    // cy.get(AddtoChart.color2).click({ force: true });
    cy.get(AddtoChart.Quantity).clear().type(10000);
    cy.get(AddtoChart.BtnUpdate).click({ force: true });
    cy.get(AddtoChart.InfoUpdateFailde).should("be.visible");
  });
  it("Add_To_Cart", () => {
    cy.get(AddtoChart.shoppePantsBtn).click();
    cy.get(AddtoChart.product).click();
    cy.get(AddtoChart.size).click();
    cy.get(AddtoChart.color).click();
    cy.get(AddtoChart.Quantity).clear().type("{upArrow}{upArrow}{upArrow}{upArrow}");
    cy.get(AddtoChart.BtnAddToCart).click();
    cy.wait(5000);
    cy.contains("You added").should("be.visible");
    cy.get(AddtoChart.upDateProduct).click({ force: true });
    cy.get(AddtoChart.BtnDelete).click({ force: true });
    cy.get(AddtoChart.BtnOke).click({ force: true });
    cy.get(AddtoChart.CartEmpty).should("be.visible");
  });
});
