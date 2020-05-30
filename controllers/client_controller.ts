import Client from "../models/client.ts"
import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";

const getUsers = async (req: Request, res: Response) => {
    //response resposta
    res.status(200).send( { clients: await Client.all() } )
}


export { getUsers };

