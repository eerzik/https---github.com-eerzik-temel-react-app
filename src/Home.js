import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
   
    const [blogs, setBlogs] = useState(null)

    const handleClick = (id) => {
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
      fetch('http://localhost:8000/yazilar')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setBlogs(data);
      })
    },[])

    return (
        <div className="Home">
           

            <div className="home">
               {blogs &&  <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick} />}
             
            
            </div>


        </div>
    );
}

export default Home;