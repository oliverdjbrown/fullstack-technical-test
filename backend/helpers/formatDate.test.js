const formatDate = require('./formatDate');

describe('formatDate', () => {
    it('should format the date correctly', () => {
        const dateString = "Mon Apr 22 2024 14:26:17 GMT-0400 (Bolivia Time)";
        const formattedDate = formatDate(dateString);
        expect(formattedDate).toBe('2024-04-22');
    });

    it('should return an empty string if the input is not a valid date string', () => {
        const dateString = "Invalid Date";
        const formattedDate = formatDate(dateString);
        expect(formattedDate).toBe('');
    });
});