function toKebabCase(input) {
    // Step 1: Validate the input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error('Input must be a non-null string.');
    }

    // Step 2: Trim and convert to lowercase
    const trimmedInput = input.trim().toLowerCase();

    // Step 3: Split the string into words
    const words = trimmedInput.split(/[\s_-]+/);

    // Step 4: Join the words using hyphens
    const kebabCaseString = words.join('-');

    // Step 5: Return the final kebab-case result
    return kebabCaseString;
}

// Example usage
console.log(toKebabCase("Hello World_Test")); // Output: "hello-world-test"