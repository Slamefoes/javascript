function validatePassword(password) {
  // Check if the password has at least 8 characters
  if (password.length < 8) {
    return false;
  }
  
  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  
  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }
  
  // Check if the password contains at least one digit
  if (!/[0-9]/.test(password)) {
    return false;
  }
  
  // All validation checks passed, password is valid
  return true;
}
