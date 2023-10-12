import { useState, useEffect } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import Van from "../../components/Van/Van";
import { getVans } from "../../../api";

export const vansDataLoader = () => {
    return getVans();
}

export default function Vans(){
    const vans = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");  

    const displayedVans = typeFilter 
       ? vans.filter(van => van.type.toLowerCase() === typeFilter)
       : vans

    return (
        <>
        <h1 className="text-5xl p-4 font-semibold text-center">Explore our van options 🚐</h1>  
        <div className="ml-3">
            <button onClick={()=> setSearchParams({type: "simple"})} 
                    className={typeFilter === "simple" 
                    ? "p-2 ml-1 bg-primary text-white font-semibold rounded-md hover:bg-primary hover:text-white hover:cursor-pointer"
                    :"p-2 ml-1 bg-white font-semibold rounded-md hover:bg-primary hover:text-white hover:cursor-pointer"}>Simple</button>
            <button onClick={()=> setSearchParams({type: "rugged"})} 
            className={typeFilter === "rugged" 
            ? "p-2 ml-1 bg-darkGreen text-white font-semibold rounded-md hover:bg-darkGreen hover:text-white hover:cursor-pointer"
            :"p-2 ml-1 bg-white font-semibold rounded-md hover:bg-darkGreen hover:text-white hover:cursor-pointer"}>Rugged</button>
            <button onClick={()=> setSearchParams({type: "luxury"})} 
                    className={typeFilter === "luxury" 
                    ? "p-2 ml-1 bg-black text-white font-semibold rounded-md hover:bg-black hover:text-white hover:cursor-pointer"
                    :"p-2 ml-1 bg-white font-semibold rounded-md hover:bg-black hover:text-white hover:cursor-pointer"}>Luxury</button>
            {typeFilter && <button onClick={()=> setSearchParams({})} className="p-2 ml-1 bg-white font-semibold rounded-md hover:bg-darkGray hover:text-white hover:cursor-pointer">Clear Filter</button>}
        </div>
            <article className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 bg-secondary p-10">
                {displayedVans && displayedVans.map(van => {
                    return <Link key={van.id} to={van.id} state={{
                                                                    search: `?${searchParams.toString()}`,
                                                                    type: typeFilter
                                                                }}>
                                <Van vans={van}/> 
                           </Link>
                })}
            </article>
        </>
    );
}