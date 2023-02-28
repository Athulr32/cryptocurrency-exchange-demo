import Header from '@/components/Header'
import Image from 'next/image'
import pic from "../../public/bg.jpeg"

import WHY from "@/components/WHY.jsx"
import Staking from "@/components/Staking.jsx"

export default function Home() {
  return (

    <>

      <div>
        <Header></Header>
        <div>
          <Image style={{ width: "100%", height: "800px" }} src={pic} alt='logo' />
        </div>
        <WHY></WHY>

      
    </div >
    </>
  )
}
