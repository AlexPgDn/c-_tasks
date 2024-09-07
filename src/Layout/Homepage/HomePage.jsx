import React, {useState,useEffect} from "react";
import HeaderItem from "./components/HeaderItem";
import ContentItem from "./components/ContentItem";
import FooterItem from "./components/FooterItem";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

const Homepage = () => {
    const value = "Alex PgDn";
    const [labels,setLabels] = useState(
        [
           /*  {id: 1, cardTitle: "Heading 1", cardText:"Description 1" },
            {id: 2, cardTitle: "Heading 2", cardText:"Description 2" },
            {id: 3, cardTitle: "Heading 3", cardText:"Description 3" },
            {id: 4, cardTitle: "Heading 4", cardText:"Description 4" },
            {id: 5, cardTitle: "Heading 5", cardText:"Description 5" },
            {id: 6, cardTitle: "Heading 6", cardText:"Description 6" },
            {id: 7, cardTitle: "Heading 7", cardText:"Description 7" }, */

        

        ]);
   

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setLabels(res.data.slice(0,5));
            });
    });
    
    
    return(
        <div className='container col-6'>
            <HeaderItem headerText={value}/>
            <ContentItem 
            setOfLabels={labels}
            />
           
            <FooterItem/>
        </div>
    )
}

export default Homepage;


/*  <button className="btn btn-primary"
            onClick={()=>{
                setLabels([...labels,
                    {id: 1, cardTitle: "Heading 1", cardText:"Description 1" }
                ])
            }}>
                Get new element.
            </button> */