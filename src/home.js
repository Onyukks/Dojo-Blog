
import BlogList from "./bloglist";
import useFetch from "./useFetch";
const Home = () => {
    // const [name,setName] = useState('Christian Eriksen')
    // const [age,setAge] =useState(30) 
    // const handleclick = (me)=>{
    //    setName('Bruno Fernandes')
    //    setAge(28)
    // }
    const  {data:blogs, isPending, err} = useFetch('http://localhost:8000/blogs')
    
   
    
    return (
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={()=>handleclick('Christian Eriksen')}>Click Me</button> */}
            {err && <div>{err}</div>}
           { isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
        </div>
      );
}
 
export default Home;