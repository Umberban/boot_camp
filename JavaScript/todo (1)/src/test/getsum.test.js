const getSum = (arr = [5,7,10]) => {
    return arr.reduce((acc,el) => acc + el,0);
};

describe('some functions', () => {
    it("sum our array", () => {
        expect(getSum()).toBe(22);
    })
    it("sum our array", () => {
        expect(getSum()).toBe(26);
    })
    it("sum our array", () => {
        expect(typeof getSum()).toBe("number");
    })
});