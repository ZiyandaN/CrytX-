import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { RiArrowDownWideLine } from "react-icons/ri";

function Navbar() {
    return (
        <header className="flex justify-between items-center p-6 bg-white ">
          
          
          <div className="relative">
            <input type="text" placeholder="Search..." 
            className="flex border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
            <CiSearch className=" absolute text-gray-500" />
          </div>


        {/* Right side of the navbarrrrr */}



          <div className="flex items-center gap-3">

             <div className="flex items-center gap-4 ">
              <span className="hover:text-purple-700"> <CiBellOn /> </span>
               <span className="hover:text-purple-700"> <CiCircleQuestion /> </span>
           
          </div>

            <img
                src="src/assets/profile.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full"
            />
          <div className="flex flex-col">
            <span className=" text-gray-700 font-medium">Ziyanda </span>
            <span className=" text-gray-500 text-xs">Beyonce@gmail.com</span>
          </div>

          <RiArrowDownWideLine />


</div>






        </header>
    )
       
}

export default Navbar
