import { RxDashboard } from "react-icons/rx";
import { LuChartPie } from "react-icons/lu";
import { LuWalletMinimal } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { FaWallet } from "react-icons/fa";
import CrypX from "../assets/CryptX.png"

function Sidebar() {
  return (
    <aside className="bg-gray-100 min-h-screen p-6">

      {/* Logo */}
      <div >
        
 
        <h1 className="text-xl font-bold">
          CryptX
        </h1>
      </div>

      {/* Sidebar Nav */}
      <nav className="mt-10">
        <ul className="flex flex-col gap-6 text-gray-300">

          <li className="flex items-center gap-3 hover:text-purple-700 font-semibold"><RxDashboard />Overview</li>
          <li className="flex items-center gap-3 hover:text-purple-700"><LuChartPie />Chart</li>
          <li className="flex items-center gap-3 hover:text-purple-700"><LuWalletMinimal />Transactions</li>
          <li className="flex items-center gap-3 hover:text-purple-700"> <FaWallet />Wallet</li>
          <li className="flex items-center gap-3 hover:text-purple-700"><IoMailOutline />Mail Box</li>
          <li className="flex items-center gap-3 hover:text-purple-700"><CiSettings />Setting</li>
          <li className="flex items-center gap-3 hover:text-purple-700"><SlLogout />Logout</li>

        </ul>
      </nav>

    </aside>
  )
}

export default Sidebar
