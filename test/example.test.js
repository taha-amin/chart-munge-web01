// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makePurchaseFrequencyCountMap } from '../data-utils.js';
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
    const actual = makePurchaseFrequencyCountMap();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});