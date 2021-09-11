import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

  // const [name, setName] = useState('mario'); 

useEffect(()=>{
  fetch('http://localhost:3001/blogs')
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      console.log(data);
      setBlogs(data);
    })
    .catch(error => {
      console.log(error.message); 
    });
},[]);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
      {/* <button onClick={()=> setName('Sri Ram')}>Change name </button> */}
      {/* <p>{ name}</p> */}
    </div>
  );
}
 
export default Home;
