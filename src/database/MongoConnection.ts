
import { config } from 'config/Constants'
import mongoose from 'mongoose'
export class MongoConnection {
    public async connect(): Promise<void>{
        try{
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log('Database connected')
        }catch(err){
            console.error(err.mensage)
            process.exit(1)
        }
    }   
}

/* O trecho do código abaixo é a original e devido as atualizações do mongoose o  useNewUrlParser e o useUnifiedTopology são true sem a necessidade de declara-los por isso eles foram removidos do código.
try{
    await mongoose.connect(config.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology:true })
    console.log('Database connected') */