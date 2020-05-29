import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";
import "./config/db.ts"

const app = new App()

app.listen({port: 3333})

