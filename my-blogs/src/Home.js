import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsPending] = useState(true); 
  const [error, setError] = useState(null); 

useEffect(()=>{
  setTimeout(()=>{
  fetch('http://localhost:3001/blogs')
    .then(res =>{
      // console.log(res);
      if(!res.ok){
       throw Error('Could not fetch data for that resource'); 
      }
      return res.json();
    })
    .then(data =>{
      setBlogs(data);
      setIsPending(false);
      setError(null);
    })
    .catch(error => {
      setIsPending(false);
      setError(error); 
    });

  },1000);

},[]);

  return (
    <div className="home">
      {error && <div> { error } </div>}
      {isLoading && <div> Loading. . .</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
    </div>
  );
}

export default Home;
