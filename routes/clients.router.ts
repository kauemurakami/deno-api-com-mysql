import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";
import Client from "../models/client.ts";
import { getUsers } from "../controllers/client_controller.ts"

const clientsRouter = new Router()

clientsRouter.get("/users", )

clientsRouter.get("/user/:id", async (req: Request, res: Response) => {
  //response resposta
  res.status(200).send( { clients: await Client.all() } )
})

clientsRouter.post("/", async (req: Request, res: Response) => {
    const { value } = await req.body();
    await Client.create([value]);
    res.status(201).send("Ok");
  });

  clientsRouter.put("/", async (req: Request, res: Response) => {
    const { value } = await req.body();
    await Client.create([value]);
    res.status(201).send("Ok");
  });

  clientsRouter.delete("/", async (req: Request, res: Response) => {
    const { value } = await req.body();
    await Client.create([value]);
    res.status(201).send("Ok");
  });
export default clientsRouter