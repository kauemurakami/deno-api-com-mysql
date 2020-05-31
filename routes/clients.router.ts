import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";
import Client from "../models/client.ts";
import { getUsers, getUser, updateUser, addUser } from "../controllers/client_controller.ts"

const clientsRouter = new Router()

clientsRouter.get("/", getUsers )

clientsRouter.get("/:id", getUser)

clientsRouter.post("/", addUser)

  clientsRouter.put("/", updateUser);

  clientsRouter.delete("/", async (req: Request, res: Response) => {
    const { value } = await req.body();
    await Client.create([value]);
    res.status(201).send("Ok");
  });
export default clientsRouter