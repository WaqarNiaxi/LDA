
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Navbar=()=>{
 
  
    return(
    <>
    
    <header id="navbar" className=" nav bg-transparent z-50 w-full ">
    <div className="container flex justify-between xxl:justify-around items-center">
        <div className="ml-10">
        <Link href="/"><Image src="/img/logo.svg" height="80" width="100" className="cursor-pointer "/></Link>
        </div>
          <div className="flex align-items-center ">
            <Link href="/" className=''><a className='home no-underline text-white transition-colors '>Home</a></Link>
            <Link href="/contact" className=''><a className='contact no-underline btn ms-5 text-white  transition-colors '>Contact Us</a></Link>
             </div>
          </div>
</header>
       
    </>)
}
export default Navbar;