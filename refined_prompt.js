/**
 * Converts a string to camelCase format.
 * 
 * This function transforms input strings by:
 * - Splitting on spaces, hyphens, and underscores
 * - Keeping the first word entirely lowercase
 * - Capitalizing the first letter of subsequent words
 * - Removing all special characters except alphanumeric
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The converted camelCase string, or empty string if input is invalid
 * @throws {Error} If input is not a string type
 * 
 * @example
 * toCamelCase('first name');        // Returns: 'firstName'
 * toCamelCase('user_id');           // Returns: 'userId'
 * toCamelCase('SCREEN_NAME');       // Returns: 'screenName'
 * toCamelCase('mobile-number');     // Returns: 'mobileNumber'
 * toCamelCase('hello world foo');   // Returns: 'helloWorldFoo'
 * 
 * @example
 * // Handles edge cases
 * toCamelCase('');                  // Returns: ''
 * toCamelCase('   ');               // Returns: ''
 * toCamelCase('single');            // Returns: 'single'
 */
function toCamelCase(input) {
    // Validate input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a valid string');
    }

    // Handle null, undefined, empty strings, and strings with only special characters
    const trimmed = input.trim();
    if (!trimmed || !/[a-zA-Z0-9]/.test(trimmed)) {
        return '';
    }

    // Remove all special characters except letters, numbers, spaces, hyphens, and underscores
    const cleaned = trimmed.replace(/[^a-zA-Z0-9\s\-_]/g, '');

    // Split by spaces, hyphens, and underscores, filtering out empty strings
    const words = cleaned.split(/[\s\-_]+/).filter(word => word.length > 0);

    // If no words remain, return empty string
    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase: first word lowercase, rest with first letter uppercase
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}
/**
 * Converts a string to dot.case format.
 * 
 * This function transforms input strings by:
 * - Splitting on spaces, hyphens, and underscores
 * - Converting all characters to lowercase
 * - Joining words with dot (.) separators
 * - Removing all special characters except alphanumeric
 * 
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The converted dot.case string, or empty string if input is invalid
 * @throws {Error} If input is not a string type
 * 
 * @example
 * toDotCase('first name');        // Returns: 'first.name'
 * toDotCase('user_id');           // Returns: 'user.id'
 * toDotCase('SCREEN_NAME');       // Returns: 'screen.name'
 * toDotCase('mobile-number');     // Returns: 'mobile.number'
 * toDotCase('hello world foo');   // Returns: 'hello.world.foo'
 * 
 * @example
 * // Handles edge cases
 * toDotCase('');                  // Returns: ''
 * toDotCase('   ');               // Returns: ''
 * toDotCase('single');            // Returns: 'single'
 */
function toDotCase(input) {
    // Validate input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a valid string');
    }

    // Handle null, undefined, empty strings, and strings with only special characters
    const trimmed = input.trim();
    if (!trimmed || !/[a-zA-Z0-9]/.test(trimmed)) {
        return '';
    }

    // Remove all special characters except letters, numbers, spaces, hyphens, and underscores
    const cleaned = trimmed.replace(/[^a-zA-Z0-9\s\-_]/g, '');

    // Split by spaces, hyphens, and underscores, filtering out empty strings
    const words = cleaned.split(/[\s\-_]+/).filter(word => word.length > 0);

    // If no words remain, return empty string
    if (words.length === 0) {
        return '';
    }

    // Convert to dot.case: all lowercase, joined by dots
    return words.map(word => word.toLowerCase()).join('.');
}