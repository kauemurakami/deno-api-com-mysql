import { App, Request, Response } from "https://deno.land/x/attain/mod.ts";
import "./config/db.ts"
import clientsRouter from "./routes/clients.router.ts"

const app = new App()

app.use("/clients", clientsRouter)

app.use((req : Request, res: Response) => {
    res.status(404).send("not found")
})

app.listen({port: 3333})

