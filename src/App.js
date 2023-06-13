import Navbar from "./Navbar";
import AnaSayfa from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {

//react-router-dom 6 ve sonrasında Switch yerine Routes geldi.
  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className='content'>
          <Routes>
          {/* exact kullanmayabiliriz buna bakılacak */}
            <Route  exact  path="/" element={<AnaSayfa />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
