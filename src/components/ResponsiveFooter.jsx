import React from 'react';


const Footer = ({name, email}) => (

        <div className="basic-footer">
            Copyright © 2021 {name}. All rights reserved <br/>
            Contact: {email}
        </div>
    )


export default Footer