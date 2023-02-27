
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken";
import User from "../../../lib/database/model";
import mongoose from 'mongoose';
import { setCookie } from 'cookies-next';

interface Data extends NextApiRequest {
    body: {
        email: String,
        password: String,
    }
}

export default async function handler(req: Data, res: NextApiResponse) {



    if (req.method == "POST") {

        const { email, password } = req.body;

        mongoose.connect("mongodb+srv://Athul:luhta%40123@cluster0.qhzaz.mongodb.net/?retryWrites=true&w=majority");

        const user = await  User.findOne({ email, password });
        console.log(user);
        if (user === null) {
            res.json({ msg: "Invalid User",flag:false })
        }
        else {

            //Send jwt token
            let token = jwt.sign({email }, "gnhjkslfvnrjdf");
      
         
            res.json({
                token,
                flag: true
            })
        }

    }
    else {
        console.log("Hello")
        res.status(401).json({ msg: "Error" });
    }



}