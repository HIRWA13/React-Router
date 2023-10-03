import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Vans from "./pages/Vans";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './server'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
