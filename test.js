// import the function sum from the app.js file
const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js')


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
 });

test("One euro should be 1.2 dollars", () => {
     let dollar = fromEuroToDollar(3.5)
     expect(dollar).toBe(4.2); 
});

test("One dollar should be 106.58 yens", () => {
    let yen = fromDollarToYen(3.5)
    expect(yen).toBeCloseTo(373.04);
});

test("One yen should be 0.006 pounds", () => {
    let pound = fromYenToPound(5000)
    expect(pound).toBeCloseTo(31.27);
});
