function validateName(name) {
  // Remove leading and trailing whitespace
  name = name.trim();
  
  // Check if the name is empty
  if (name === '') {
    return false;
  }
  
  // Check if the name contains only letters (allowing spaces and hyphens)
  if (!/^[A-Za-z\s-]+$/.test(name)) {
    return false;
  }
  
  // Check if the name has a minimum length requirement
  if (name.length < 2) {
    return false;
  }
  
  // All validation checks passed, name is valid
  return true;
}
