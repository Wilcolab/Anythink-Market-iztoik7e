function toCamelCase(str) {
    return str
        .replace(/[^a-zA-Z0-9\s_-]/g, '') // Remove special characters
        .split(/[\s_-]+/) // Split by spaces, underscores, and hyphens
        .filter(word => word.length > 0) // Remove empty strings
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;