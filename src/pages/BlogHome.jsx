import React, {useEffect} from 'react'



export default function BlogHome({background}) {

    useEffect(() =>  {

        document.body.style.backgroundImage = "url(" + "https://cdn.pixabay.com/photo/2017/06/21/07/33/background-2426328_960_720.jpg" + ")"

    },[])


    return (
        <div className="cards-main-div">
            <div class="card">
                <div class="card-image"></div>
                    <div class="card-text">
                        <span class="date">4 days ago</span>
                        <h2>Post One</h2>
                        <p> lorem em sum dog</p>
                    </div>
                <div class="card-stats">
                    <div className="stat">
                        <div className="value">4m</div>
                        <div className="type">read</div>
                    </div>

                    <div className="stat border">
                        <div className="value">5123</div>
                        <div className="type">views</div>
                    </div>

                    <div className="stat">
                        <div className="value">32</div>
                        <div className="type">comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}