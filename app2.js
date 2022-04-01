import { customers } from './data.js';
import { makeCoolFactorCountMap } from './data-utils.js';

const countMap2 = makeCoolFactorCountMap(customers);

const labels = Object.keys(countMap2);

const data = {
    labels: labels,
    datasets: [{
        label: '# of customers by cool factor',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMap2),
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart2'),
    config
);

console.log(makeCoolFactorCountMap(customers));