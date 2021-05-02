import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/railscasts.css'

export default function BlogPost () {


    useEffect(() => {

            document.body.style.backgroundImage = "url(" + "https://cdn.pixabay.com/photo/2017/07/01/19/47/background-2462426_960_720.jpg" + ")"
        }, []) 



    return (
        <div className="blogPostMainDivOutside">

            {/* displaying code as text  */}
            {/* <link rel="stylesheet" href="../../node_modules/highlight.js/styles/railcasts.css"/> */}

            <div className="blog">
                <div className="date">30 june 2011</div>
                    <h2 className="blog-title">This is my first Blog</h2>
                    <p className="blog-paragraph">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, 
                    consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word 
                    in classical literature, discovered the 
                    undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                    This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, 
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. 
                    </p>

                    <p className="blog-paragraph-2">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, 
                    consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word 
                    in classical literature, discovered the 
                    undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                    This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, 
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. 
                    </p>
                    <p className="blog-paragraph-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, 
                    consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word 
                    in classical literature, discovered the 
                    undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                    This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, 
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. 
                    </p>
                    
                    <div className="code-1">
                    <Highlight className='python'>
{`def temptation(multiples):
    
    # define x
    x = 25
    
    # define y
    y = 15
    
    return x + y`}
                    </Highlight>
                    </div>


                    <hr className="line-border"></hr>
            
            
            
            
            </div >
        
        
        
        
        </div>



)}