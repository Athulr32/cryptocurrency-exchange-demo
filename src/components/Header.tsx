import Link from "next/link";




export default function Header() {


    return (
        <div className="bg-black text-white">
            <div className="flex justify-between p-1">

                <div className="flex">
                    <div id="logo" className="mx-2.5 my-5">
                        Logo
                    </div>

                    {/*Items in header*/}
                    <div className="mx-2.5 mt-5">
                        Buy Crypto
                    </div>

                    <div className="mx-2.5 mt-5">
                        Markets
                    </div >

                    <div className="mx-2.5 mt-5" >
                        Trade
                    </div>

                    <div className="mx-2.5 mt-5" >
                        Staking
                    </div>

                    <div className="mx-2.5 mt-5" >
                        Beginner Zone
                    </div>

                </div>

                <div id="auth" className="flex">

                    {/*Authenticaton Button*/}
                    <div className="mx-2.5 mt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                           <Link href="/login"> Login</Link>
                        </button>
                    </div >
                    <div className="mx-2.5 mt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                           <Link href="/signup"> SignIn</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

