
import express from 'express'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/', express.static(resolve(__dirname, 'dist')))

app.listen(process.env.PORT || 3000, (erro) =>{
    if(erro){
        console.log(erro)
    }

    console.log("Deu certo, essa vaga é sua")
})
