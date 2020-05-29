import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";
import Client from "../models/client.ts";

const clientsRouter = new Router()

clientsRouter.get("/", async (req: Request, res: Response) => {
    //response resposta
    res.status(200).send( { clients: await Client.all() } )
})

clientsRouter.post("/", async ( req: Request, res: Response) => {

    const { value } = await req.body() //json enviada ao cliente
    await Client.create({value})
    //response resposta
    res.status(201).send({ clients: await Client.all()})
})

export default clientsRouter