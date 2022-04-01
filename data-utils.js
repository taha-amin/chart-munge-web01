import { customers } from './data.js';

//bar chart showing # of customers by each purchase frequency
export function makePurchaseFrequencyCountMap() {
    const countMap = {};

    for (let customer of customers) {
        const frequency = customer.purchase_frequency;

        if (countMap[frequency]) {
            countMap[frequency]++;
        } else {
            countMap[frequency] = 1;
        }
    }

    return countMap;
}

//Line chart showing # of customers by each cool factor
export function makeCoolFactorCountMap() {
    const countMap2 = {};

    for (let customer of customers) {
        const coolFactor = customer.cool_factor;

        if (countMap2[coolFactor]) {
            countMap2[coolFactor]++;
        } else {
            countMap2[coolFactor] = 1;
        }
    }

    return countMap2;
}

//Pie chart showing # of customers by each gender
export function genderData() {
    const countMap3 = {};

    for (let customer of customers) {
        const gender = customer.gender;

        if (countMap3[gender]) {
            countMap3[gender]++;
        } else {
            countMap3[gender] = 1;
        }
    }

    return countMap3;
}