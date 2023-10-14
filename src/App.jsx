import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, redirect} from "react-router-dom";
import { vansDataLoader as vansLoader} from "./pages/Vans/Vans";
import { vanDetailLoader } from "./pages/Vans/VanDetails";
import { hostVansDataLoader } from "./pages/Host/HostVans";
import { hostVanDetailsDataLoader } from "./pages/Host/HostVans/HostVanDetails";
import { requireAuth } from "../utils";

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
import Login, {loader as loginLoader} from "./pages/LoginSignup/Login";

import Layout from "./components/Layouts/Layout";
import HostLayout from "./components/Layouts/HostLayout";
import HostVanDetailLayout from "./components/Layouts/HostVanDetailLayout";
import ErrorElement from "./components/ErrorElement/ErrorElement";



import "./server";

const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Layout/>}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route 
         path="login" 
         element={<Login/>}
         loader={loginLoader}
         />
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
         element={<HostLayout/>}
         >
      <Route 
      index 
      element={<Dashboard />}
      loader={async () => await requireAuth()}
      />
      <Route 
      path="income" 
      element={<Income />} 
      loader={async () => await requireAuth()}
      />
      <Route 
      path="reviews" 
      element={<Reviews />} 
      loader={async () => await requireAuth()}
      />
      <Route 
      path="vans" 
      element={<HostVans />} 
      loader={hostVansDataLoader}
      />
      <Route 
      path="vans/:id" 
      element={<HostVanDetailLayout />}
      loader={hostVanDetailsDataLoader}
      > 
          <Route 
          index 
          element={<HostVanDescription/>}
          />
          <Route 
          path="pricing" 
          element={<HostVanPrice/>}
          loader={async () => await requireAuth()}
          />
          <Route 
          path="photos" 
          element={<HostVanPhotos/>}
          loader={async () => await requireAuth()}
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
