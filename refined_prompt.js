/**
 * Converts a given string to camelCase format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Will throw an error if the input is null or undefined.
 * @throws {Error} Will throw an error if the input is not a string.
 * @returns {string} The camelCase version of the input string.
 *
 * @example
 * console.log(toCamelCase("first name")); // "firstName"
 * console.log(toCamelCase("USER_ID")); // "userId"
 * console.log(toCamelCase("  mobile-number ")); // "mobileNumber"
 * console.log(toCamelCase("")); // ""
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Will throw an error if the input is null or undefined.
 * @throws {Error} Will throw an error if the input is not a string.
 * @returns {string} The dot.case version of the input string.
 *
 * @example
 * console.log(toDotCase("first name")); // "first.name"
 * console.log(toDotCase("USER_ID")); // "user.id"
 * console.log(toDotCase("  mobile-number ")); // "mobile.number"
 * console.log(toDotCase("")); // ""
 */
function toCamelCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Validate string input
    if (typeof input !== "string") {
        throw new Error(`Expected a string, but received ${typeof input}`);
    }

    // Trim whitespace
    const trimmed = input.trim();

    // Return empty string for empty input
    if (trimmed === "") {
        return "";
    }

    // Split by word separators (spaces, underscores, hyphens)
    // and filter out empty strings
    const words = trimmed
        .split(/[\s_-]+/)
        .filter((word) => word.length > 0);

    // Convert to camelCase
    return words
        .map((word, index) => {
            // Convert to lowercase first
            const lowercased = word.toLowerCase();

            // Capitalize first letter of all words except the first one
            if (index === 0) {
                return lowercased;
            }
            return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
        })
        .join("");
}

// Test cases
console.log(toCamelCase("first name")); // "firstName"
console.log(toCamelCase("USER_ID")); // "userId"
console.log(toCamelCase("  mobile-number ")); // "mobileNumber"
console.log(toCamelCase("")); // ""
// console.log(toCamelCase(null)); // throws error
// console.log(toCamelCase(123)); // throws error

function toDotCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Validate string input
    if (typeof input !== "string") {
        throw new Error(`Expected a string, but received ${typeof input}`);
    }

    // Trim whitespace
    const trimmed = input.trim();

    // Return empty string for empty input
    if (trimmed === "") {
        return "";
    }

    // Split by word separators (spaces, underscores, hyphens)
    // and filter out empty strings
    const words = trimmed
        .split(/[\s_-]+/)
        .filter((word) => word.length > 0);

    // Convert to dot.case
    return words
        .map((word) => word.toLowerCase())
        .join(".");
}

// Test cases
console.log(toDotCase("first name")); // "first.name"
console.log(toDotCase("USER_ID")); // "user.id"
console.log(toDotCase("  mobile-number ")); // "mobile.number"
console.log(toDotCase("")); // ""

