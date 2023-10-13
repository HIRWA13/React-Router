import {  Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

import { simpleStyles, ruggedStyles, luxuryStyles } from "../../Vans/VanDetails" 
import { getHostVans } from "../../../../api";
import { requireAuth } from "../../../../utils";

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

export const hostVanDetailsDataLoader = async ({params}) => {
  await requireAuth();
  return getHostVans(params.id);
}

export default function HostVanDetails() {
  const hostVanDetails = useLoaderData();
  return (
    <>
      <section className="bg-white p-4 rounded-md">
        <div>
          <Link to="/host/vans" className="p-2 texl-sm underline">
            Back to your listed vans
          </Link>
        </div>
        <article className="bg-white p-4">
          <div className="flex items-center gap-3">
            <div>
              <img src={hostVanDetails.imageUrl}  className="w-40"/>
            </div>
            <div className="flex flex-col gap-2">
              {hostVanDetails.type === "simple" && <p style={simpleStyles}>{hostVanDetails.type}</p>}
              {hostVanDetails.type === "rugged" && <p style={ruggedStyles}>{hostVanDetails.type}</p>}
              {hostVanDetails.type === "luxury" && <p style={luxuryStyles}>{hostVanDetails.type}</p>}
              <h1 className="text-4xl font-bold">{hostVanDetails.name}</h1>
              <p className="text-2xl font-bold">${hostVanDetails.price}<span className="font-normal">/day</span></p>
            </div>
          </div>
        </article>
        <nav className="flex items-center gap-3 mt-2">
          <NavLink to="." end style={({isActive})=> isActive ? activeStyles : null}>
            <p className="text-sm">Details</p>
          </NavLink>
          <NavLink to="pricing" style={({isActive})=> isActive ? activeStyles : null}>
            <p className="text-sm">Pricing</p>
          </NavLink>
          <NavLink to="photos" style={({isActive})=> isActive ? activeStyles : null}>
            <p className="text-sm">Photos</p>
          </NavLink>
        </nav>
        <Outlet context={hostVanDetails}/>
      </section>
    </>
  );
}