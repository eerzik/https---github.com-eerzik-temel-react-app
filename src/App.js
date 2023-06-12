

function App() {

  //değişken süslü parantezler ile kullanılır
  const baslik = "AOS Blog"
  let okunmaSayisi = 300;
  // //boolen tip olduğu için süslü parantez içerisinde kullanamıyoruz.
  // const durum=true;

  const blog = { ad: "ilk", aciklama: "ilk açıklama" }
  //Değişkeni attribute olarak kullanıyoruz
  const link = "www.google.com"
  return (
    <div className="App">
      <div className='content'>

        {/* değişken süslü parantezler ile kullanılır */}
        <h1>
          {/* Süslü parantez içerisinde yazınca da aynen gösteriliyor
          {"Merhaba"} */}
          {baslik}
        </h1>
        <p>
          {/* Süslü parantez içerisinde yazınca da aynen gösteriliyor
           Okunma Sayısı {10} */}
          Okunma Sayısı {okunmaSayisi}
        </p>
        {/* boolen tip olduğu için süslü parantez içerisinde kullanamıyoruz.
        <p>
          Durum {durum}
        </p> */}
        <p>
          Blog Ad : {blog.ad}
          {/* Dizi olarak da yazdırabiliyoruz
          Blog Ad : {[1,2,3]} */}
        </p>
        <a href={link}>Google</a>
        <p>
          Blog Açıklama:{blog.aciklama}
        </p>
      </div>
    </div>
  );
}

export default App;
