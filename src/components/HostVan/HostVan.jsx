export default function HostVan({van}) {
  return (
    <div className="flex p-2 items-center mt-2  gap-4 bg-white rounded-md">
      <div>
        <img src={van.imageUrl} className="w-20 rounded-md"/>
      </div>
      <div>
        <h1 className="text-xl font-semibold">{van.name}</h1>
        <p className="text-lg font-bold opacity-60">{van.price}/day</p>
      </div>
    </div>
  )
}