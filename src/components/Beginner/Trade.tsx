

import { useEffect } from "react";
import styles from "./Trade.module.css";

export default function Trade() {


    useEffect(()=>{
        
    },[])

    return (

        <>

            <div style={{height:"100%",backgroundColor:"#111827"}}>

                <div className="flex content-center justify-center" style={{ padding: "100px" }}>
                    <div className="text-white rounded-xl " style={{ backgroundColor: "#1f2937" ,}}>
                        <div className="p-10">

                            <div>
                                {/* <div>
                                Buy or Sell the crypto You want
                            </div> */}
                                <div>

                                    BTC<svg fill="white" viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-4ba21b47-0 IIbzK inline"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
                                </div>
                                <div className="mt-2">
                                    <input placeholder="0" className="w-200 h-12 rounded-lg text-black border-none outline-none p-2" />
                                </div>
                            </div>
                            <div className="my-10 text-center">
                                <svg fill="white" viewBox="0 0 24 24" className="sc-4ba21b47-0 hgqOyz _1cvvxtw3 block text-center m-auto" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path></svg>
                            </div>

                            <div>

                                <div>
                                    USDT<svg fill="white" viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className=" inline  text-white"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
                                </div>

                                <div className="mt-2">
                                    <input placeholder="0" className="w-200 h-12 rounded-lg text-black outline-none p-2" />
                                </div>
                            </div>

                            <div className="mt-10 text-center bg-rose-900 h-10 rounded-lg">
                                <button className="pt-2 w-1/5">Trade</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}