import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MultipleLineChart from '../components/line'


export default function Home() {

    // set the data to be
    const [mainData, setMainData] = useState(0)

    useEffect(() => {

        axios.get('/api/data/economy_data')
        .then((response) => {
            setMainData(response.data)
        })
    }, [mainData.values])

    return (
    
    <div className="main-background">
            
            <h1 className="main-title">
                Real-time Commodities Tracking
            </h1>
            

            <div className="breakdown">
                <p>Commodity cost overtime. Data from <a href="https://www.worldbank.org/en/research/commodity-markets">World Bank Commodities Data</a></p>
            </div>

            <div className="main-chart-div">
                <div className ="main-chart-sizing">
                    <h2>Commodities</h2>
                <MultipleLineChart data_={ mainData } />
                </div>
            </div>
    </div>    
)};