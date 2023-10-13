import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import { vansDataLoader as vansLoader} from "./pages/Vans/Vans";
import { vanDetailLoader } from "./pages/Vans/VanDetails";

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
import PageNotFound from "./pages/404/PageNotFound";

import Layout from "./components/Layouts/Layout";
import HostLayout from "./components/Layouts/HostLayout";
import HostVanDetailLayout from "./components/Layouts/HostVanDetailLayout";
import ErrorElement from "./components/ErrorElement/ErrorElement";



import "./server";

const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Layout/>}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="vans" element={<Vans />} 
         loader={vansLoader} 
         errorElement={<ErrorElement/>}/>
  <Route 
         path="vans/:id" 
         element={<VanDetails />} 
         loader={vanDetailLoader}
         />
  <Route 
         path="host" 
         element={<HostLayout/>}>
      <Route 
      index 
      element={<Dashboard />}
      loader={()=> {
        return null
      }}
      />
      <Route 
      path="income" 
      element={<Income />} 
      loader={()=> {
        return null
      }}
      />
      <Route 
      path="reviews" 
      element={<Reviews />} 
      loader={()=> {
        return null
      }}
      />
      <Route 
      path="vans" 
      element={<HostVans />} 
      loader={()=> {
        return null
      }}
      />
      <Route 
      path="vans/:id" 
      element={<HostVanDetailLayout />}> 
      loader={()=> {
        return null
      }}
          <Route 
          index 
          element={<HostVanDescription/>}
          loader={()=> {
            return null
          }}
          />
          <Route 
          path="pricing" 
          element={<HostVanPrice/>}
          loader={()=> {
            return null
          }}
          />
          <Route 
          path="photos" 
          element={<HostVanPhotos/>}
          loader={()=> {
            return null
          }}
          />
      </Route>
  </Route>
  <Route path="*" element={<PageNotFound/>}/>
</Route>
))

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
