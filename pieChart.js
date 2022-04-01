import { customers } from './data.js';
import { genderData } from './data-utils.js';

const countMap3 = genderData(customers);

const labels = Object.keys(countMap3);

const data = {
    labels: labels,
    datasets: [{
        label: '# of customers by each gender',
        backgroundColor: ['black', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'],
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMap3),
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {}
};

// eslint-disable-next-line
const myChart = new Chart(
    document.getElementById('myChart3'),
    config
);

//console.log(genderData(customers));