import Navbar from "./Navbar";
import AnaSayfa from "./Home";

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <AnaSayfa></AnaSayfa>
      </div>
    </div>
  );
}

export default App;
