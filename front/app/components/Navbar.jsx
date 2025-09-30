'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const Navbar = () => {
    const path = usePathname()
    console.log(path)

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return ( <>
    <div className="flex flex-row justify-between bg-slate-500 text-white p-4">

        <ul className="flex gap-4">
            <Link href="/">NextEdge</Link>
            {/* Add search bar here */}
            
        </ul>

        {isLoggedIn && (<>
        
            <ul className="flex gap-4">
                <Link href="/" className={path === "/" ? "border-b-4 decoration-3 text-yellow-500" :"border-b-4 border-transparent hover:border-yellow-500 hover:text-yellow-500 transition"} >Home</Link>
                <Link href="/profile" className={path === "/profile" ? "border-b-4 decoration-3 text-yellow-500" : "border-b-4 border-transparent hover:border-yellow-500 hover:text-yellow-500 transition"}>Profile</Link>
                <Link href="/add" className={path === "/add" ? "border-b-4 decoration-3 text-yellow-500" : "border-b-4 border-transparent hover:border-yellow-500 hover:text-yellow-500 transition"}>Add Post</Link>

            </ul>
        </>)}

        <ul className="flex gap-4">
            
            {isLoggedIn ? (<>
                <p>Logout</p>
            
            </>) : (<>
                    <Link
                    href="/access/login"
                    className={
                        path === "/access/login" || path === "/access/signup"
                        ? "border-b-4 border-yellow-500 text-yellow-500"
                        : "border-b-4 border-transparent hover:border-yellow-500 hover:text-yellow-500 transition"
                    }
                    >
                    Login/Signup
                    </Link>            
            </>)}
        </ul>

       
    </div>
    
    </> );
}
 
export default Navbar;