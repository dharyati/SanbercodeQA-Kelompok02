class SignUpPage {
  createBtn = ".panel > .header > :nth-child(3) > a[href='https://magento.softwaretestingboard.com/customer/account/create/']";
  firstName = "#firstname.input-text.required-entry";
  lastName = "#lastname";
  email = "#email_address";
  pass = "#password";
  confirmPassword = "#password-confirmation";
  btnCreate = "#form-validate > .actions-toolbar > div.primary > .action";
  errorMsg = ".message-error";
  fieldEmailKosong = "#email_address-error";
  fieldPassKosong = "#password-error";
  fieldConfirmpassKosong = "#password-confirmation-error";
  fieldFirstNameKosong = "#firstname-error";
  fieldLastNameKosong = "#lastname-error.mage-error";
}

export default SignUpPage;
