import { customers } from './data.js';
import { genderData } from './data-utils.js';

const countMap3 = genderData(customers);

const labels = Object.keys(countMap3);

const data = {
    labels: labels,
    datasets: [{
        label: '# of customers by each gender',
        backgroundColor: ['beige', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'],
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMap3),
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart3'),
    config
);