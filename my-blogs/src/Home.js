import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

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
