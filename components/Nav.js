
import requests from "../util/requests";
import { useRouter } from "next/dist/client/router";
 function Nav() {
     const router = useRouter();

    return (
        <nav className=' text-gray relative'>
           <div className='flex flex-grow px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
               {Object.entries(requests).map(([key,{title, url}])=>(
                    <h2 
                    key={key} 
                    onClick = {()=>router.push(`/?genre=${key}`)}
                    className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125
                     hover:text-white active:text-red-300'>{title}</h2>
               ))}
           </div>
           <div className="absolute top-0 right-0 bg-gradient-to-l from-myBlue h-10 w-1/12"  />
        </nav>
    )
}
export default Nav;