class loginPage {
  signInBtn = ".panel > .header > .authorization-link > a[href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']";
  email = "#email.input-text";
  password = "#pass";
  BtnSignIn = "#send2";
  msgError = ".message-error";
  fieldEmailKosong = "div#email-error.mage-error";
  fieldPassKosong = ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control";
}

export default loginPage;
