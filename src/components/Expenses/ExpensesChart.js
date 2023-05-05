import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for(const expense of props.expenses){ 
        const expenseMonth = expense.date.getMonth(); //for every expense in a particular month will be stored in expenseMonth
        chartDataPoints[expenseMonth].value += expense.amount; //sets the value prop to the expenses summed up in that month
    }
    return <Chart dataPoints={chartDataPoints}/> //datapoints will have the updated chartDataPoints
}

export default ExpensesChart;