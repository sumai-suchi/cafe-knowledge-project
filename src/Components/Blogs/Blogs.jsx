import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark,handleReadingTime}) => {
const [Blogs,setBlogs]=useState([])

useEffect(()=>
    {
        fetch('Blog.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs :{Blogs.length}</h1>
            {
                Blogs.map(blog=> <Blog key={blog.id} blog={blog} 
                    handleBookmark={handleBookmark}
                    handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes=
{
    handleBookmark:PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blogs;