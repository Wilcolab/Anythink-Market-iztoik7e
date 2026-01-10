function toKebabCase(value) {
    // Step 1: Validate the input
    if (typeof value !== 'string' || value === null || value === undefined) {
        throw new Error('Input must be a valid string');
    }

    // Step 2: Clean the string
    let cleaned = value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s_-]/g, '');

    // Step 3: Replace spaces, underscores, and multiple consecutive separators with a single hyphen
    cleaned = cleaned.replace(/[\s_-]+/g, '-');

    // Step 4: Return the final formatted kebab-case string
    return cleaned;
}

module.exports = toKebabCase;