import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const  hostVanDetails  = useOutletContext();
  return (
    <>
      <div className="p-2">
          <img src={hostVanDetails?.imageUrl} width={100} className="rounded-lg"/>
      </div>
    </>
  )
}