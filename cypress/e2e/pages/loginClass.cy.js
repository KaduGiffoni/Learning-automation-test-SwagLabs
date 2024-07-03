import { elementLogin } from "../elements/loginElements.cy";

export class Login {
  form = {
    userName: () => cy.get(elementLogin.credentials.username),
    password: () => cy.get(elementLogin.credentials.password),
    error: () => cy.get(elementLogin.error),
    button: () => cy.get(elementLogin.button),
    title: () => cy.get(elementLogin.title),
  };

  successLogin(userName, password) {
    this.form.userName().type(userName);
    this.form.password().type(password);
    this.form.button().click();
    this.form.title().should("contain", "Product");
  }

  emptyLogin() {
    this.form.button().click();
    this.form.error().should("contain", "Username is required");
  }

  emptyUserName(password) {
    this.form.password().type(password);
    this.form.button().click();
    this.form.error().should("contain", "Username is required");
  }

  emptyPassword(userName) {
    this.form.userName().type(userName);
    this.form.button().click();
    this.form.error().should("contain", "Password is required");
  }

  clear() {
    this.form.userName().clear();
    this.form.password().clear();
  }

  lockedUser(userName, password) {
    this.form.userName().type(userName);
    this.form.password().type(password);
    this.form.button().click();
    this.form
      .error()
      .should("contain", "Sorry, this user has been locked out.");
  }

  notFindUser(userName, password) {
    this.form.userName().type(userName);
    this.form.password().type(password);
    this.form.button().click();
    this.form
      .error()
      .should(
        "contain",
        "Username and password do not match any user in this service"
      );
  }
}
