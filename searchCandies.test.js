const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('available candies', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
    });
    it('available candies', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    });
    it('available candies', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
    });
    it('available candies', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
    })
})