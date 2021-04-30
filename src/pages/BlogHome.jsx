import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function BlogHome({background}) {





    // pass in whatever
    const [blogList, setBlogList] = useState(undefined)
    const [imageList, setImageList] = useState([])

    useEffect(() =>  {

        // background color
        // document.body.style.backgroundImage = "url(" + "https://cdn.pixabay.com/photo/2017/06/21/07/33/background-2426328_960_720.jpg" + ")"

        // axios get request
        axios.get('/api/blog-list').then(({data}) => {
            setBlogList(data)
        })
        
    },[])


    return (
        <div className="do-nothing-div">

            <div className="banner">
                <div className="container">
                    <div className="banner-content">
                        <span>NEW ARRIVALS</span>
                        <h1>Denim Jackets</h1>
                        <p>lorem ipsum</p>
                        <a href="#" className="btn-one">Discover</a>
                        <a href="#" className="btn-two">Buy Now</a>
                    </div>
                </div>
            </div>



            <div className="display-flex-container">
            {blogList && blogList.map(blog => (
                <div className="cards-main-div">
                    <div class="card">
                        <div class="card-image" style ={ { backgroundImage: "url("+blog.image_link+")" } }></div>
                            <div class="card-text">
                                <span class="date">{blog.date}</span>
                                <h2>{blog.title}</h2>
                                <p>{blog.description}</p>
                            </div>
                        <div class="card-stats">
                            <div className="stat">

                                <div className="value">{blog.value_1}</div>
                                <div className="type">{blog.type_1}</div>
                            </div>

                            <div className="stat border">
                                <div className="value">{blog.value_2}</div>
                                <div className="type">{blog.type_2}</div>
                            </div>

                            <div className="stat">
                                <div className="value">{blog.value_3}</div>
                                <div className="type">{blog.type_3}</div>
                            </div>
                        </div>
                    </div>
                </div>))}
    </div>
    </div>
    )
}