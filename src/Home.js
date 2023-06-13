import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
   
    const [blogs, setBlogs] = useState(null)

    const[yukleniyor,setYukleniyor]=useState(true);

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
        //console.log(data);
        setBlogs(data);
        setYukleniyor(false);
      })
    },[])

    return (
        <div className="Home">
           

            <div className="home">
                {yukleniyor && <div className="loading">Yükleniyor....</div>}
               {blogs &&  <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick} />}
             
            
            </div>


        </div>
    );
}

export default Home;