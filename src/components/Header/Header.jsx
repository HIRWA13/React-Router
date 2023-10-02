import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex justify-between py-4 px-20 bg-secondary">
                <div>
                   <Link to="/">
                     <h1 className="text-2xl uppercase font-bold cursor-pointer">#vanlife</h1>
                   </Link>
                </div>
                <nav>
                    <ul className="flex items-center gap-5">
                       <Link to="/about">
                         <li className="capitalize cursor-pointer text-lg font-semibold">about</li>
                       </Link>
                        <li className="capitalize cursor-pointer text-lg font-semibold">vans</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}