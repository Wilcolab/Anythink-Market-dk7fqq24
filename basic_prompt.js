/**
 * Convert a string into camelCase, handling spaces and underscores.
 * Examples:
 *  toCamelCase("hello world") -> "helloWorld"
 *  toCamelCase("convert_this_string") -> "convertThisString"
 */
function toCamelCase(str) {
    if (!str) return '';
    return str
        .split(/[\s_]+/)
        .map((word, i) => {
            if (i === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

module.exports = toCamelCase;