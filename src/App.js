import Navbar from "./Navbar";
import AnaSayfa from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

//react-router-dom 6 ve sonrasında Switch yerine Routes geldi.
  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<AnaSayfa />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
