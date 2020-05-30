import Client from "../models/client.ts"
import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";

export const getUsers = async (req: Request, res: Response) => {
    //response resposta
    res.status(200).send({ clients: await Client.all() })
}

export const getUser = async ({ params, response }:
    { params: { id: string }; response: any },) => {
    const id = params.id
    if (id) {
        await Client.where('id', id).first()
    }
}
    //response resposta

    //res.status(200).send( { clients: await Client.where('id',  ) } )
    //res.status(200).send( { clients: await Client.where('id',req. ) } )



