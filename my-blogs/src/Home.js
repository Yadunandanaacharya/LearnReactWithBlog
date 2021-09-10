import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isLoading, setIsPending] = useState(true); 

useEffect(()=>{
  fetch('http://localhost:3001/blogs')
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      setBlogs(data);
      setIsPending(false);
    })
},[]);

  return (
    <div className="home">
      {isLoading && <div> Loading. . .</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
    </div>
  );
}

export default Home;
