import { Login } from "../pages/loginClass.cy";
import userData from "../../fixtures/userData.json";

const login = new Login();

describe("Login tests", () => {
  it("login has error with empty e-mail", () => {
    cy.visit("/");
    login.emptyUserName(userData.password);
  });
  it("Login has error with empty Password", () => {
    login.clear();
    login.emptyPassword(userData.users.userNameSuccessful);
  });
  it("Login has error is empty", () => {
    login.clear();
    login.emptyLogin();
  });
  it("this user is locked", () => {
    login.lockedUser(userData.users.lockedUser, userData.password);
  });
  it("this user is not find", () => {
    login.clear();
    login.notFindUser(userData.users.anyUser, userData.password);
  });
  it("Login is successful", () => {
    login.clear();
    login.successLogin(userData.users.userNameSuccessful, userData.password);
  });
});
