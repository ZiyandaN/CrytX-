
import React from 'react'

import BitcoinLogo from '../assets/dashboard-images/Bitcoin.png'
import EthereumLogo from '../assets/dashboard-images/Etherium.png'
import LitecoinLogo from '../assets/dashboard-images/Litecoin.png'
import CardanoLogo from '../assets/dashboard-images/Cardano.png'


function Dashboard() {
    return (
        <div className="grid grid-cols-2 gap-4">

            
            <div className="bg-white p-5 rounded-xl shadow-sm h-40 flex items-center justify-center">
                <img
                    src={BitcoinLogo}
                    alt="Bitcoin"
                    className="w-full h-full object-contain"
                />
            </div>

            
            <div className="bg-white p-5 rounded-xl shadow-sm h-40 flex items-center justify-center">
                <img
                    src={EthereumLogo}
                    alt="Ethereum"
                    className="w-full h-full object-contain"
                />
            </div>

           
            <div className="bg-white p-5 rounded-xl shadow-sm h-40 flex items-center justify-center">
                <img
                    src={LitecoinLogo}
                    alt="Litecoin"
                    className="w-full h-full object-contain"
                />
            </div>

            
            <div className="bg-white p-5 rounded-xl shadow-sm h-40 flex items-center justify-center">
                <img
                    src={CardanoLogo}
                    alt="Cardano"
                    className="w-full h-full object-contain"
                />
            </div>

        </div>

        
    )
}

export default Dashboard
