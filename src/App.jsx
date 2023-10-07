import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDescription from "./pages/Host/HostVans/HostVanSub/HostVanDescription";
import HostVanPrice from "./pages/Host/HostVans/HostVanSub/HostVanPrice";
import HostVanPhotos from "./pages/Host/HostVans/HostVanSub/HostVanPhotos";

import Layout from "./components/Layouts/Layout";
import HostLayout from "./components/Layouts/HostLayout";
import HostVanDetailLayout from "./components/Layouts/HostVanDetailLayout";



import "./server";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="host" element={<HostLayout/>}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetailLayout />}> 
                    <Route index element={<HostVanDescription/>}/>
                    <Route path="pricing" element={<HostVanPrice/>}/>
                    <Route path="photos" element={<HostVanPhotos/>}/>
                </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
