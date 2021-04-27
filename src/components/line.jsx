import Chart from './Chart'

export default function MultipleLineChart({data_}) {

    // function needs to be an array ????
    const data_convert = []

    // pass the object to the array
    for (let i = 0; i < data_.length; i++) {
        data_convert.push(data_[i])
    }

    // get data -> 
    // axios get
    // pass data to chart ->
    let option = {
    
    // title: {
    //     text: 'Commodities',
    // },
    tooltip: {
        trigger: 'axis' 
    },
    legend: {
        data: [
            "Date",
            "Energy",
            "Non-energy",
            "Agriculture",
            "Beverages",
            "Food",
            "Oils & Meals",
            "Grains",
            "Other Food",
            "Timber",
            "Other Raw Mat.",
            "Fertilizers",
            "Metals & Minerals",
            "Precious Metals",
            ]
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1960,
            1961,
            1962,
            1963,
            1964,
            1965,
            1966,
            1967,
            1968,
            1969,
            1970,
            1971,
            1972,
            1973,
            1974,
            1975,
            1976,
            1977,
            1978,
            1979,
            1980,
            1981,
            1982,
            1983,
            1984,
            1985,
            1986,
            1987,
            1988,
            1989,
            1990,
            1991,
            1992,
            1993,
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            "2021M01",
            "2021M02",
            "2021M03"
            
            ]
    },
    yAxis: {
        type: 'value'
    },

    series: data_convert
};

    return (
            <Chart options={option} />
    )}