import protect from "@/lib/protect";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { Coin } from "@/lib/database/model";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const { flag, email } = protect(req);

    console.log(email)
    if (!flag) {
        res.json({ msg: "Invalid User" });
        return;
    }

    const coin = req.body.coin;

    mongoose.connect("mongodb+srv://Athul:luhta%40123@cluster0.qhzaz.mongodb.net/?retryWrites=true&w=majority");

    let get_coin = await Coin.findOne({ email })

    let coin_amount = get_coin[coin]

    res.json({ amount: coin_amount })

}

