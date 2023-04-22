import { useEffect, useState } from "react";
import axios from "axios";
let useFetch=(url)=>{
const [data, setBlogs] = useState([])
const [isPending ,setPending]=useState(true);
      useEffect(()=>{//api 
     axios(url).then(res=>{
       setBlogs(res.data);
       setPending(false)
     })
    
      },[])//[] if u want to rander once or put the name of the var u want to trace
      return { data, isPending }
    }
export default useFetch