
import Header from './Components/Header/Header'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import { useState } from 'react'


function App() {

  const [bookmark,setBookmark]=useState([])
  const [Reading,setReadingTime]=useState(0);

  const handleReadingTime=(reading_time)=>
  {
    const newReadingTime=Reading+reading_time;
    setReadingTime(newReadingTime)
  }

  const handleBookmark=(blog)=>
  {
    const NewBookmarks=[...bookmark,blog];
    setBookmark(NewBookmarks)
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
      
      <Bookmark bookmark={bookmark} Reading={Reading}></Bookmark>

      </div>
      
    </>
  )
}




export default App
