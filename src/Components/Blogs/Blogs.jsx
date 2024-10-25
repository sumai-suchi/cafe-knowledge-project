import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
const [Blog,setBlog]=useState([])

useEffect(()=>
    {
        fetch('Blog.json')
        .then(res =>res.json())
        .then(data =>setBlog(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;