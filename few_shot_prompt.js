// Function to convert strings to camelCase
function toCamelCase(str) {
  // Replace spaces, hyphens, and underscores with spaces, then split by space
  // Filter out empty strings, capitalize each word except the first, then join
  return str
    .replace(/[-_\s]+/g, ' ')  // Replace separators with spaces
    .split(' ')                 // Split by space
    .filter(word => word)       // Remove empty strings
    .map((word, index) => {
      // Convert to lowercase first
      word = word.toLowerCase();
      // Capitalize first letter if not the first word
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');                  // Join without separators
}

// Examples:
console.log(toCamelCase('first name'));        // Output: firstName
console.log(toCamelCase('user_id'));           // Output: userId
console.log(toCamelCase('SCREEN_NAME'));       // Output: screenName
console.log(toCamelCase('mobile-number'));     // Output: mobileNumber
