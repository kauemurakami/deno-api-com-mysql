import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";
import { getUsers, getUser, updateUser, addUser, deleteUser } from "../controllers/client_controller.ts"

const clientsRouter = new Router()

clientsRouter.get("/", getUsers )

clientsRouter.get("/:id", getUser)

clientsRouter.post("/", addUser)

  clientsRouter.put("/:id", updateUser);

  clientsRouter.delete("/:id", deleteUser);

export default clientsRouter