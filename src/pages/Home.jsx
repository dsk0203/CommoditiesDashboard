import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Chart from "../components/Chart"
import MultipleLineChart from '../components/line'
import line from '../components/line'
import Basicline from '../components/test'


export default function Home() {

    // set the data to be
    const [lineData, setLineData] = useState(0)

    useEffect(() => {
        axios.get('/api/data/fake_data')
        .then((response) => {
            setLineData(response.data[0].values)
        })
    }, [lineData.values])

    return (
    
    <div className="main-background">
            
            <h1 className="main-title">
                Real-time Commodities Tracking
            </h1>
            
            <h3 className="main-text-explain">
                Commodities vs Real-Time Inflation
            </h3>

            <p className="breakdown">
                Compare commodities costs to others. Select/De-select whichever items you wish to see. big lobster on the block  
            </p>
            
            <div className="main-chart-div">
                {/* <Chart options={line} /> */}
            </div>

            <div>
                {JSON.stringify(lineData)}
            </div>

            <div className="temp">
                <Basicline data={ lineData } />
            </div>

            <div className="main-chart-div">
                <MultipleLineChart option={ null } />
            </div>
    </div>    
)};