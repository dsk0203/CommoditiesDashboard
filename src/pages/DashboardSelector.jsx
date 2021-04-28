import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router'
// react hook that executes logic whenever your component is mounted or not 

export default function DashboardSelector({ axios }) {

    const [dashboardList, setDashboardList] = useState(undefined)


    useEffect(() => {

        document.body.style.backgroundColor = "white"

        axios.get('/api/dashboard-list')
            .then(({data}) => {
                setDashboardList(data)
            })
            // eslint-disable-next-line
    }, []) 

    return (
        <div className="main-dashboard-title">
            <h1>Recent Blogs</h1>
        <section className="dashboard-selector">
        {dashboardList && dashboardList.map(dashboard => (
            <Link className="dashboard-card" to={dashboard.path} >
                <h3 className="dash-title">{dashboard.title}</h3>
                <p className="dash-description"> {dashboard.description}</p>
            </Link>
        ))}
    </section>
    </div>)

}