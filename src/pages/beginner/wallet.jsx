import Header from "@/components/Beginner/Header";
import Portfolio from "@/components/Beginner/Portfolio";
import axios from "axios";


export default function Wallet({ coins }) {


    return (
        <div style={{ height: "100%" }}>
            <div style={{ height: "100%" }}>
                <Header></Header>
                <Portfolio coins={coins}></Portfolio>
            </div>
        </div>


    )




}


export async function getServerSideProps({ req, res }) {



    const reqs = await fetch("http://localhost:3000/api/userwallet/fullbalance", {
        method: "GET",
        headers: {
            Cookie: req.headers.cookie
        }
    })


    const response = await reqs.json();

    // let coins = Object.entries(response.coins);
    // console.log(coins);
    let coins = Object.entries(response.coins)
        .sort(([, a], [, b]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    coins = Object.entries(coins);

    for (let coin of coins) {

        if (coin[0] == "INR") {
            coin.push(1)
        }
        else {
            let foo = "";
            if (coin[0] == "BTC") {
                foo = "bitcoin";
            }
            else if (coin[0] == "ETH") {
                foo = "ethereum"
            }
            else if (coin[0] == "USDT") {
                foo = "tether"
            }


            try {
                const req = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${foo}&vs_currencies=usd`)

                const res = await req.json();

                let price = res[foo].usd
                coin.push(price * 83);
            }
            catch (e) {
                console.log("Fetching error")
                continue;
            }
        }

    }

    console.log(coins)

    return {
        props: {
            coins
        }
    }
}