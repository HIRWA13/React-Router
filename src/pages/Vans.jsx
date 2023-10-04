import { useState, useEffect } from "react";
import Van from "../components/Van/Van";
import { Link } from "react-router-dom";

export default function Vans(){
    const [vans, setVans] = useState([]);

    useEffect(() => {
       fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))

    }, []);
    
    return (
        <>
        <h1 className="text-5xl p-4 font-semibold text-center">Explore our van options 🚐</h1>
            <article className="w-4/5 mx-auto mt-10 mb-5 grid grid-cols-3 place-items-center gap-4 bg-secondary p-10">
                {vans && vans.map(van => {
                    return <Link key={van.id} to={`/vans/${van.id}`}>
                                <Van vans={van}/> 
                           </Link>
                })}
            </article>
        </>
    );
}