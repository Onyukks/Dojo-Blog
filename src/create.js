import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const [title,setTitle]= useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('mario')
    const [isPedning,setisPending] =useState(false)
    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault()
       const blog= {title,body,author}
       setisPending(true)
       fetch('http://localhost:8000/blogs',{
         method: 'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(blog)
       }).then(data=>console.log('New blog added'))
       setisPending(false)
       history.push('/')
       setTitle('');
        setBody('');
        setAuthor('');
      
    }
    return (  
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog title:</label>
                <input
                 type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                 >
                  <option value="mario">mario</option>
                  <option value="yoshi">yoshi</option>
              </select>
                {!isPedning && <button>Add Blog</button>}
                {isPedning && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;