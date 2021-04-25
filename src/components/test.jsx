import Chart from './Chart'

export default function Basicline({data}) {
    // get data -> 
    // axios get
    // pass data to chart ->
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data,
            type: 'line'
        }]
    };

    return (
            <Chart options={option} />
    )}