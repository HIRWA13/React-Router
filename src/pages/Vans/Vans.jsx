import { useState, useEffect } from "react";
import Van from "../../components/Van/Van";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans(){
    const [vans, setVans] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const typeFilter = searchParams.get("type");
   
   const displayedVans = typeFilter 
       ? vans.filter(van => van.type.toLowerCase() === typeFilter)
       : vans

    useEffect(() => {
       fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))

    }, []);
    
    return (
        <>
        <h1 className="text-5xl p-4 font-semibold text-center">Explore our van options 🚐</h1>
        <div className="ml-3">
            <button onClick={()=> setSearchParams({type: "simple"})} className="p-2 ml-1 bg-white font-semibold rounded-md hover:bg-primary hover:text-white hover:cursor-pointer">Simple</button>
            <button onClick={()=> setSearchParams({type: "rugged"})} className="p-2 ml-1 bg-white font-semibold rounded-md hover:bg-darkGreen hover:text-white hover:cursor-pointer">Rugged</button>
            <button onClick={()=> setSearchParams({type: "luxury"})} className="p-2 ml-1 bg-white font-semibold rounded-md hover:bg-black hover:text-white hover:cursor-pointer">Luxury</button>
            <button onClick={()=> setSearchParams({})} className="p-2 ml-1 bg-white font-semibold rounded-md hover:bg-darkGray hover:text-white hover:cursor-pointer">Clear Filter</button>
        </div>
            <article className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 bg-secondary p-10">
                {displayedVans && displayedVans.map(van => {
                    return <Link key={van.id} to={`/vans/${van.id}`}>
                                <Van vans={van}/> 
                           </Link>
                })}
            </article>
        </>
    );
}