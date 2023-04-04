import { useEffect, useState } from "react"
import data from "./data.js"
import Header from "@/components/Beginner/Header";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default function Categories() {

    const [category,setCategory] = useState(null)


    function changeCategory(e){
        e.preventDefault();
        console.log()
       let category = e.target.value;
       let foo = data.find((element)=>element.id === category)
       console.log(foo)
        setCategory(foo)
    }

  


    return (
        <>

        <Header></Header>

            <div style={{ color: "white", overflow: "none" }}>

                <div style={{ display: "flex" }}>

                    {/* category list */}
                    <div style={{ width: "30%", overflow: "scroll", height: "100vh" }}>

                        <div style={{ padding: "50px 100px 0px 100px", }}>
                            {data.map((value, index) => {
                                return (
                                    <div style={{ padding: "20px", border: '1px solid gray', margin: "10px" }}>

                                        <button value={value.id} onClick={changeCategory}>{value.id}</button>
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                    Hi
                    {/* Category Details */}
                    <div>

                    </div>

                </div>



            </div>


        </>
    )



}