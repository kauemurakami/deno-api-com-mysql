import Client from "../models/client.ts"
import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";

export const getUsers = async (req: Request, res: Response) => {
    res.status(200).send({ clients: await Client.all() })
}

export const getUser = async (req: Request, res: Response) => {
    res.status(200).send({ client: await Client.where('id', req.params.id).first() }) 
}

export const updateUser = async (req: Request, res: Response) => {


}

export const addUser = async (req: Request, res: Response) => {
    const body = await req.body()
    const client : Client  = body.value
    console.log(client)
    const {name, email, password} = body.value
    await Client.create( { name: name, email: email, password: password }  )
    res.status(200).send( {client: client} ) 
    //Client.create( { body } )
}


