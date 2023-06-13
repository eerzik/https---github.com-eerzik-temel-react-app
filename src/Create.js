import { useState } from "react";


const Create = () => {

    const [baslik,setBaslik]=useState('');
    const [aciklama,setAciklama]=useState('');
    const [yazar,setYazar]=useState('luffy');

    const handleSubmit =(e)=>{
        //preventDefault-Postback özelliği yok edildi.yoksa sayfa postback oluyor herşey temizleniyor.
        e.preventDefault();
        const yazi={baslik,aciklama,yazar};
        console.log(yazi);
    }
    return ( 
        <div className="create">
            <h2 style={{color:'#ff793f'}} >Yeni Yazı Ekle</h2>
            <form onSubmit={handleSubmit}>
                <label>Yazı Başlık:</label>
                <input type="text" required value={baslik} onChange={(e)=>setBaslik(e.target.value)} ></input>
                <label>Yazı Açıklama:</label>
                <textarea required value={aciklama} onChange={(e)=>setAciklama(e.target.value)} ></textarea>
                <label>Yazar:</label>
                <select value={yazar} onChange={(e)=>setYazar(e.target.value)}>
                    <option value="luffy">Luffy</option>
                    <option value="zoro">Zoro</option>
                    <option value="sanji">Sanji</option>
                </select>
                <button>Ekle</button>
              
            </form>
        </div>
     );
}
 
export default Create;