import { useEffect, useState } from "react"
import TrendingCards from "../../components/MarketData/TrendingCards";

import Header from "@/components/Beginner/Header";

export default function Trending() {


    const [trending, setTrending] = useState([{}]);
    const [gotTrend, setGotTrend] = useState(false);

    async function getTrending() {

        const req = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const response = await req.json()
        let trendingCoins = response.coins;
    //    trendingCoins = trendingCoins.map((value,index)=>{
    //     fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${value}&vs_currencies=usd`)

    //     })
        return trendingCoins;
   


    }


    useEffect(() => {

        getTrending()
        .then(data=>{
            setTrending(data)
            setGotTrend(true)
        })
     

    }, [])


    return (
        <div>
            <Header></Header>

            <div style={{fontSize:"30px",color:"white",textAlign:"center",margin:"50px 0px 50px",fontWeight:"bolder"}}>Trending Coins 🔥</div>

            <div style={{ display: "flex", justifyContent: 'start' ,flexWrap:"wrap",margin:"0px 200px 0px 400px"}}>
                {
                    gotTrend &&


                    trending.map((trend, index) => {

                        console.log(trend.item)
                        return (

                            <div style={{marginRight:"100px",marginBottom:"100px"}}>
                                <TrendingCards price={trend.item.price_btc} name={trend.item.name || ""} image={trend.item.large} rank={trend.item.market_cap_rank}></TrendingCards>
                            </div>
                        )

                    })
                }

            </div>

        </div>
    )


}