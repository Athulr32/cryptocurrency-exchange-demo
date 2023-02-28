import axios from "axios"
import { useEffect, useState } from "react"
import Deposit from "./Deposit.jsx";





export default function Portfolio({ coins }) {

    

    const [deposit,showDeposit] = useState(false);

    function closeDeposit(){

        showDeposit(false)
    }
    useEffect(()=>{

    },[])



    return (
        <>
            {/* <div  style={{ backgroundColor: "#101623"}} className="text-center text-white p-5 text-3xl">Welcome User</div> */}
        {deposit && <Deposit close={closeDeposit}></Deposit>}
            <div style={{ backgroundColor: "#101623", height: "100%" }} >
                <div className="text-white" style={{ padding: "100px 100px 0px 150px" }}>

                    <div className="flex justify-between">

                        <div>
                            <div className="text-3xl ">Balance</div>

                            <div className="mt-4 text-white w-60 p-4" style={{ backgroundColor: "#1e2433" }}>
                                <div className="m-2">
                                    Total Portfolio Value
                                </div>
                                <div className="m-2">
                                    10 dollar
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-center items-end">
                            <div className="mx-2.5 mt-5">
                                <button onClick={()=>{
                                 
                                    showDeposit(true)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                    Deposit
                                </button>
                            </div >
                            <div className="mx-2.5 mt-5">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                    Withdraw
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Coins Holding*/}
                    <div style={{ marginTop: "50px", borderRadius: "10px", width: "100%" }}>
                        <div >
                            <table style={{ width: "100%" }} >
                                <thead>
                                    <tr style={{ backgroundColor: "#161d2b", padding: "10px" }}>
                                        <th style={{ padding: "10px 200px 20px 50px", textAlign: "left" }}>Coin</th>
                                        <th style={{ padding: "2px 200px 2px 200px", textAlign: "left" }}>Amount</th>
                                        <th style={{ padding: "2px 200px 2px 200px", textAlign: "left" }}>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coins.map((key, index) => {
                                        return (
                                            <tr key={index} style={{ backgroundColor: "#1e2433" }}>

                                                <td style={{ padding: "20px 200px 20px 50px", textAlign: "left" }}>{key[0]}</td>
                                                <td style={{ padding: "20px 200px 20px 200px", textAlign: "left" }}>{key[1]}</td>
                                                <td style={{ padding: "20px 200px 20px 200px", textAlign: "left" }}>4532</td>
                                            </tr>
                                        )


                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )



}




