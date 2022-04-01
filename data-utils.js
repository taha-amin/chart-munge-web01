import { customers } from './data.js';

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