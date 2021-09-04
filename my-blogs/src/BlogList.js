const BlogList = (props) => {
// const BlogList = ({ blogs, title}) => {
const blogs = props.blogs;
const title = props.title;

console.log(props,blogs);

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((item)=>(
                <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Written by {item.author}</p>
                </div>
            ))}
        </div>
      );
}
 
export default BlogList;

