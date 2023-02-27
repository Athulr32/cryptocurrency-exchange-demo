import Link from "next/link";



export default function Header(){


    return(
       <>
       <div className="flex items-center justify-center bg-black text-white">
            <div className="mx-2.5 p-4"><Link href="/beginner/learn">Learn</Link></div>
            <div className="mx-2.5 p-4"><Link href="/beginner">Trade</Link></div>
            <div className="mx-2.5 p-4"><Link href="/beginner/wallet">Wallet</Link></div>

            <div className="absolute right-10"> Switch To Pro</div>
       </div>
       </>
        
    )
}