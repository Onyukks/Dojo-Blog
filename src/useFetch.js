import { useState,useEffect } from "react"
const useFetch = (url) => {
   
    const [data,setData]= useState(null)
    const [isPending,setisPending]= useState(true)
    const [err,setErr] = useState(null)
    useEffect(()=>{
        const abortCont =new AbortController()
        const fetchData = async()=>{
         try{
            // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            // await delay(3000);
             const response = await fetch(url,{signal:abortCont.signal})
             if(!response.ok){
                 throw new Error('Error retreiving blogs')
             }
             const data =await response.json()
             setData(data)
             setisPending(false)
         }catch(e){
            if(e.name === 'AbortError'){
                return console.log('fetch aborted')
            }
             setErr(e.message)
             setisPending(false)
         }
        }
        fetchData()
        return ()=> abortCont.abort()
             },[url])
    return {data,isPending,err}
}
 
export default useFetch;