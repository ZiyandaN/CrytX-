
import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import LiveMarkets from './assets/dashboard-images/LiveMarkets.png'
import BTCPrices from './assets/dashboard-images/BTCPrices.png'
import Transactions from './assets/dashboard-images/Transactions.png'



function App() {
    return (
        <div className="min-h-screen grid grid-cols-[230px_minmax(0,1fr)]">

            <Sidebar />

            <main className="min-w-0">

                <Navbar />

                <div className="grid grid-cols-2 gap-6 p-6">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">

                        {/*top left corner*/}
                        <Dashboard />

                        {/* Live Markets */}
                        <div className="bg-white p-5 rounded-xl shadow-sm h-80">
                            <img
                                src={LiveMarkets}
                                alt="LiveMarketsImage"
                                className="w-full h-full object-contain"
                            />
                        </div>

                    </div>

                    {/* Right top plek */}
                    <div className="space-y-6">

                        {/* BTC Prices */}
                        <div className="bg-white p-5 rounded-xl shadow-sm h-80">
                             <img
                                src={BTCPrices}
                                alt="BTCPricesImage"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Transactions */}
                        <div className="bg-white p-5 rounded-xl shadow-sm h-80">
                            <img
                                src={Transactions}
                                alt="TransactionsImage"
                                className="w-full h-full object-contain"
                            />
                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default App
