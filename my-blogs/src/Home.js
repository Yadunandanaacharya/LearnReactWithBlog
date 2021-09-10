import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    //here above deleted listed data which is hardcoded from here onward displaying data like
    //it's coming from an API. So run this command in another port by pressing on + sign on terminal
    //npx json-server --watch src/data/db.json --port 3001
    //we're running 2 ports one for react another for like server data we display data from
    //data folder db.json file

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
