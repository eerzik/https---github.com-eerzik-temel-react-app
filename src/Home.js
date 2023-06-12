import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    // const handleClick = () => {

    //     console.log('merhaba');
    // }

    // const handleClick2 = (isim) => {
    //     console.log(isim);
    // }
    // const handleClick3 = (isim, e) => {
    //     //console.log(isim,e.target);
    //     console.log(isim, e);
    // }

    // const [sayac, setSayac] = useState(0);

    // const handleClick4 = () => {

    //     setSayac(3);
    // }
    const [blogs, setBlogs] = useState([
        {
            ad: "Yeni Başlayanlar için c#",
            aciklama: "lorem ipsum",
            yazar: "luffy",
            id: 1
        },
        {
            ad: "React Öğreniyorum",
            aciklama: "lorem ipsum",
            yazar: "zoro",
            id: 2
        },
        {
            ad: "İleri seviye c#",
            aciklama: "lorem ipsum",
            yazar: "luffy",
            id: 3
        },
        {
            ad: "MVC Öğreniyorum",
            aciklama: "lorem ipsum",
            yazar: "sanji",
            id: 4
        }
    ])
    const handleClick = (id) => {
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    }

    return (
        <div className="Home">
            {/* <h2>Ana Sayfa</h2> */}
            {/*() pametre göndermiyorsak console e bir defa açıldığında yazdırır sonrasında bir işlem yapmaz
            <button onClick={handleClick()} >Tıkla</button> */}
            {/* <button onClick={handleClick} >Tıkla</button>
            <button onClick={() => handleClick2('luffy')} >Tıkla2</button>
            <button onClick={(e) => handleClick3('luffy', e)} >Tıkla3</button> */}
            {/* <button onClick={(e) => {
                console.log(e)
            }} >Tıkla4</button> */}

            {/* //useState kullandığımızda render edilmiş hali olabiliyor. */}
            {/* <p>{sayac}</p>
            <button onClick={handleClick4} >Arttır</button> */}

            <div className="home">
                <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick} />
                {/* <br></br>
                <BlogList bloglar={blogs.filter((blog) => blog.yazar == 'luffy')} baslik="Seçkin Yazarların Yazıları" /> */}
            </div>


        </div>
    );
}

export default Home;