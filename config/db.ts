import {  Database } from 'https://deno.land/x/denodb/mod.ts';
import  Client  from "../models/client.ts";

const db = new Database(
    "mysql",{
        database: "airlines",
        host: "localhost",
        username: "root",
        password: "mariadb10",
    }
)

//array de modelos
db.link([Client])
//drop/create  no inicio da aplicação
//await db.sync({drop: true})

export default db