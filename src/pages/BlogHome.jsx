import React, {useEffect} from 'react'




export default function BlogHome({background}) {

    useEffect(() =>  {

        console.log(background)
        document.body.style.backgroundColor = background

    },[])


    return (

        <div>blog home</div>
    )
}