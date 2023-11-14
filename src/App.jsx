import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App