import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { simpleStyles, ruggedStyles, luxuryStyles } from "../../Vans/VanDetails" 

export default function HostVanDetails() {
  const [hostVanDetails, setHostVanDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    getHostVanDetails();
  }, [params.id]);
  const getHostVanDetails = async () => {
    const res = await fetch(`/api/host/vans/${params.id}`);
    const data = await res.json();
    setHostVanDetails(data.vans[0]);
  };
  console.log(hostVanDetails);
  return (
    <>
      <section className="p-2 rounded-md">
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
      </section>
    </>
  );
}