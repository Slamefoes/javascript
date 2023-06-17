function validateEmail(email) {
  // Remove leading and trailing whitespace
  email = email.trim();
  
  // Check if the email is empty
  if (email === '') {
    return false;
  }
  
  // Check if the email has a valid format using a regular expression
  if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    return false;
  }
  
  // All validation checks passed, email is valid
  return true;
}
