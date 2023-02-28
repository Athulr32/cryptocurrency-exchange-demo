import Header from "@/components/Beginner/Header";
import LearnCards from "@/components/LearnCards.jsx"
import image1 from "../../../public/1.png";

export default function Learn() {


    return (
        <div>
            <Header></Header>
            <div>
                <div style={{color:"white",textAlign:"center",padding:"40px",fontSize:"30px"}}>Welcome</div>
                <div className="flex" style={{margin:"20px 30px 0px 100px"}}>

                    <LearnCards heading={"THis is heading"}  body={"THis is body"} image1={image1}></LearnCards>
                    <LearnCards image1={image1}></LearnCards>
                </div>
            </div>
        </div>
    )




}

