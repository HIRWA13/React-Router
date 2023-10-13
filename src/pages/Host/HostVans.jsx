import { Link, useLoaderData } from "react-router-dom"
import HostVan from "../../components/HostVan/HostVan";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";


export const hostVansDataLoader = async () => {
  await requireAuth();
  return getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();

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
