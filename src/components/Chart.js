import React, { useRef, useEffect } from 'react'
import PropTypes from "prop-types"
import echarts from 'echarts'

function Chart({ options }) {

    const myChart = useRef(null)

    useEffect(() => {
        const chart = echarts.init(myChart.current)
        chart.setOption(options)
    }, [options, ResizeObserver])


    return(
        <div ref={myChart} style={{width: '100%', height: '250%'}}></div>
    )
}


Chart.propTypes = {
    options: PropTypes.any
}

export default Chart