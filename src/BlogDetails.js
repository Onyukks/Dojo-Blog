import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const  {data:blog, isPending, err} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()
    const handledetelete = ()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        })
        history.push('/')
    }
    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {err && <div>{err}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handledetelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;