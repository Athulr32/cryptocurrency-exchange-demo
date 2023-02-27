import protect from "@/lib/protect";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { Coin, CointType } from "@/lib/database/model";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method == 'GET') {


        console.log("Hello");
        const { flag, email } = protect(req);

        console.log(email)
        if (!flag) {
            res.json({ msg: "Invalid User" });
            return;
        }

        mongoose.connect("mongodb+srv://Athul:luhta%40123@cluster0.qhzaz.mongodb.net/?retryWrites=true&w=majority");

        let get_coin = await Coin.findOne({ email });

        let obj: any = Object.entries(get_coin)[2][1];
        delete obj["_id"];
        delete obj["email"];
        delete obj["__v"];
        console.log(obj);

        res.json({ coins: obj })
    }
    else{

        res.json({msg:"Invalid Request"})
    }
}