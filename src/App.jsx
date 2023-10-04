import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Header from "./components/Header/Header";

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
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
