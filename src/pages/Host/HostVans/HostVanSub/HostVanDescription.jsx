import { useOutletContext } from "react-router-dom"

export default function HostVanDescription() {

  const  hostVanDetails  = useOutletContext();

  return (
    <>
      <div className="p-2">
        <h1 className="font-bold mt-1">Name: <span className="font-normal">{hostVanDetails?.name}</span></h1>
        <h1 className="font-bold mt-1">Type: <span className="font-normal">{hostVanDetails?.type}</span></h1>
        <h1 className="font-bold mt-1">Deceription: <span className="font-normal">{hostVanDetails?.description}</span></h1>
      </div>
    </> 
  )
}