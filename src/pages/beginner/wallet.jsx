import Header from "@/components/Beginner/Header";
import Portfolio from "@/components/Beginner/Portfolio";
import axios from "axios";


export default function Wallet({coins}) {


    return (
        <div style={{height:"100%"}}>
            <div style={{height:"100%"}}>
                <Header></Header>
                <Portfolio coins={coins}></Portfolio>
            </div>
        </div>

        
    )




}


export async function getServerSideProps({req,res}){

 

    const reqs = await fetch("http://localhost:3000/api/userwallet/fullbalance",{
        method:"GET",
        headers:{
            Cookie:req.headers.cookie
        }
    })

   
    const response = await reqs.json();
    let coins = Object.entries(response.coins);
    console.log(coins);
    return{
        props:{
            coins
        }
    }
}