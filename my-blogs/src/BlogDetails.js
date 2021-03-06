// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {
//     const {id} = useParams();
//     const {data : blog, isPending, error} = useFetch('http://localhost:3000/blogs/' + id );

//     return ( 
//         <div className="blog-details">
//             {/* <h2>Blog details {id}</h2> */}
//             {isPending && <div>Loading...</div>}
//             {error && <div>{error}</div>}
//             {blog && (
//                 <article>
//                     <h2>{blog.title}</h2>
//                     <p>Written by {blog.author}</p>
//                     <div>{blog.body}</div>
//                 </article>
//             ) }
//         </div>
//      );
// }
 
// export default BlogDetails;


import {useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog,  isLoading,error } = useFetch('http://localhost:3001/blogs/' + id);
    const history = useHistory();

    const handleClick=()=>{
        fetch('http://localhost:3001/blogs/'+ blog.id, {
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }


  return (
    <div className="blog-details">
      {/* <div> 
        {this.data.id && <div> 
            {this.data.id.map(i => (<div>{i.value}</div>))} 
            </div>}
      </div> */}
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete blog</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;