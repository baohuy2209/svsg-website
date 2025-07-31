"use client"; 
import { usePathname } from "next/navigation";
import React from "react"; 
const Providers = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname(); 
    React.useEffect(() => {
        window.scroll(0,0); 
    }, [pathname]); 
    return children; 
}; 
export default Providers; 