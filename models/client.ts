import { DATA_TYPES, Model } from 'https://deno.land/x/denodb/mod.ts'

export default class Client extends Model {
    static table = "clients"
    static timestamps = true

    static fields = {
        id : { 
            primaryKey : true,
            autoIncrement: true
        },
        name : DATA_TYPES.STRING,
        email : DATA_TYPES.STRING,
        password : DATA_TYPES.STRING,
    }
}