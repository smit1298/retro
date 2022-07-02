const lineLabels = ['January', 'February', 'March', 'April'];
const barLabels = ['January', 'February', 'March', 'April','May','June','July'];


export const ExpenseData = [
    {
        type: 'line',
        description : 'Daily Income',
        amount :'345',
        labels: lineLabels,
        datasets: [
            {
                tension: 0.4,
                data: [50, 100, 50, 70],
                borderColor: 'rgb(47, 150, 209)',
                backgroundColor: 'rgb(47, 150, 209)',
            },
        ],
    },
    {        
        type: 'bar',
        description : 'Daily Expenses',
        amount :'380',
        labels:barLabels,
        datasets: [
            {
                tension: 0.4,
                data: [100, 40, 70, 30,20,50,100],
                borderColor: 'rgb(238, 142, 142)',
                backgroundColor: 'rgb(238, 142, 142)',
            },
        ],
    },
    {
        type: 'line',
        description : 'Weekly Income',
        amount :'5380',
        labels:lineLabels,
        datasets: [
            {
                tension: 0.4,
                data: [50, 100, 50, 70],               
                borderColor: 'rgb(142, 76, 218)',
                backgroundColor: 'rgb(142, 76, 218)',
            },
        ],
    },
    {
        type: 'bar',
        description : 'Weekly Expenses',
        amount :"4320",
        labels:barLabels,
        datasets: [
            {
                tension: 0.4,
                data: [100, 40, 70, 30,20,50,100],
                borderColor: 'rgb(209, 172, 104)',
                backgroundColor: 'rgb(209, 172, 104)',
            },
        ],
    }
];