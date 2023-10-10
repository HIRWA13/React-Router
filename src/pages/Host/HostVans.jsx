import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import HostVan from "../../components/HostVan/HostVan";
export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    getHostVan();
  }, []);

  const getHostVan = async () => {
    const res = await fetch("/api/host/vans");
    const data = await res.json();
    setHostVans(data.vans);
  };
  const vans = hostVans.map((van) => {
    return <Link to={van.id} key={van.id}><HostVan van={van} /></Link>;
  });

  return (
    <>
      <section className="p-2">
        <h1 className="text-2xl font-bold p-2">Your listed vans</h1>
        <div>{vans}</div>
      </section>
    </>
  );
}
