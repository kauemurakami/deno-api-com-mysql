import {  Database } from 'https://deno.land/x/denodb/mod.ts';
import  Client  from "../models/client.ts";

const db = new Database(
    "mysql",{
        database: "airlines",
        host: "localhost",
        username: "db_root",
        password: "mariadb10",
    }
)

db.link([Client])

await db.sync({drop: true})

export default db