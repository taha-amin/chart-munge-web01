// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makePurchaseFrequencyCountMap, makeCoolFactorCountMap } from '../data-utils.js';
import { customers } from '../data.js';

const test = QUnit.test;

test('takes in customer data and returns number of customers by each purchase frequency', (expect) => {
    const countMap = {
        'Daily': 142,
        'Monthly': 123,
        'Never': 123,
        'Often': 126,
        'Once': 107,
        'Seldom': 129,
        'Weekly': 122,
        'Yearly': 128
    };
    
    //Arrange
    // Set up your arguments and expectations
    const expected = countMap;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makePurchaseFrequencyCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('takes in customer data and returns number of customers by each cool factor', (expect) => {
    const countMap2 = {
        1: 109,
        2: 119,
        3: 99,
        4: 101,
        5: 93,
        6: 102,
        7: 101,
        8: 99,
        9: 82,
        10: 95  

    };

    //Arrange
    //Set up your arguments and expectations
    const expected = countMap2;

    //Act
    //Call the function you're testing and set the result to a const
    const actual = makeCoolFactorCountMap(customers);

    //Expect
    //Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});