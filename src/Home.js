const Home = () => {
    const handleClick = () => {

        console.log('merhaba');
    }

    const handleClick2 = (isim) => {
        console.log(isim);
    }
    const handleClick3 = (isim,e) => {
        //console.log(isim,e.target);
         console.log(isim,e);
    }

    return (
        <div>
            <h2>Ana Sayfa</h2>
            {/*() pametre göndermiyorsak console e bir defa açıldığında yazdırır sonrasında bir işlem yapmaz
            <button onClick={handleClick()} >Tıkla</button> */}
            <button onClick={handleClick} >Tıkla</button>
            <button onClick={() => handleClick2('luffy')} >Tıkla2</button>
            <button onClick={(e) => handleClick3('luffy',e)} >Tıkla3</button>
            <button onClick={(e) => {
                console.log(e)
            }} >Tıkla4</button>
        </div>
    );
}

export default Home;