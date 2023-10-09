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
            <article className="mt-10 mb-5 grid grid-cols-2 md:grid-cols-3 place-items-center gap-6 bg-secondary p-10">
                {displayedVans && displayedVans.map(van => {
                    return <Link key={van.id} to={`/vans/${van.id}`}>
                                <Van vans={van}/> 
                           </Link>
                })}
            </article>
        </>
    );
}