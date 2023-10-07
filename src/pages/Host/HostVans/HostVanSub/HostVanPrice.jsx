import { useOutletContext } from "react-router-dom"

export default function HostVanPrice() {
  const  hostVanDetails  = useOutletContext();
  return (
    <>
        <h1 className="text-4xl font-bold p-2">${hostVanDetails?.price}<span className="text-3xl font-thin">/day</span></h1>
    </>
  )
}