


const Create = () => {
    return ( 
        <div className="create">
            <h2 style={{color:'#ff793f'}} >Yeni Yazı Ekle</h2>
            <form>
                <label>Yazı Başlık:</label>
                <input type="text" required ></input>
                <label>Yazı Açıklama:</label>
                <textarea required></textarea>
                <label>Yazar:</label>
                <select>
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