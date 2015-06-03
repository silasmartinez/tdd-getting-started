/**
 * Created by silasmartinez on 6/3/15.
 */
myCode = require('../app.js')

describe("Testing:", function() {
    it("a silly check from app.js", function() {
        expect(myCode.sum(2,3)).toBe(5);
        expect(myCode.sum(20,35)).toBe(55);
        expect(myCode.sum(false,5)).toBe(5);
    });
});
describe("Testing:", function() {
    it("#div()", function() {
        expect(myCode.div(3,1)).toBe(3);

    });
});
describe("Testing:", function() {
    it("#remainder()", function() {
        expect(myCode.remainder(3,1)).toBe(0);
        expect(myCode.remainder(4,2)).toBe(0);

    });
});
describe("Testing:", function() {
    it("#average()", function() {
        expect(myCode.average(4,2)).toBe(3);
        expect(myCode.average(0,10)).toBe(5);
        expect(myCode.average(4,2,3)).toBe(3);

    });
});
describe("Testing:", function() {
    it("#isPrime()", function() {
        expect(myCode.isPrime(2)).toBe(true);
        expect(myCode.isPrime(4)).toBe(false);
        expect(myCode.isPrime(3)).toBe(true);

    });
});