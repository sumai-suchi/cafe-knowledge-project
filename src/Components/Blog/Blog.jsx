import PropTypes from 'prop-types';

import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleBookmark,handleReadingTime}) => {
   const {title,cover,author_img,author,reading_time,posted_date,hash_tags}=blog
    return (
        <div className='mb-20'>
           <img className='w-full rounded-md border-4 border-orange-300  ' src={cover} alt="" /> 

           <div className='flex justify-between'>
            <div className='flex m-2'>
                   <img className='w-14 rounded-full mb-4' src={author_img} alt="" />
                   <div className='ml-2'>
                    <h2 className='text-2xl '>{author}</h2>
                    <p>{posted_date}</p>
                   </div>
            </div>
            <div>
                  <span>{reading_time} min read</span>
                  <button onClick={()=>handleBookmark(blog)} className='p-1'><CiBookmark /></button>
            </div>
           </div>
           <h1 className='text-3xl'>{title}</h1>

          <p>
           {
            hash_tags.map((hash,inx)=> <span key={inx}><a href="">{hash}</a></span>)
           }
          </p>

           <button onClick={()=>handleReadingTime(reading_time)}>mark as read</button>
        </div>
    );
};

export default Blog;

Blog.propTypes=
{
   blog: PropTypes.object.isRequired,
   handleBookmark:PropTypes.func,
   handleReadingTime:PropTypes.func
}