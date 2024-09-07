import React from "react";

const rights = "© All rights reserved";
let today = new Date(); 
let year = today.getFullYear(); 

const FooterItem = () => {
    return(
        <div>
            <p className='m-3'>{rights +" "+ year}</p>
        </div>
        
    )
}

export default FooterItem;