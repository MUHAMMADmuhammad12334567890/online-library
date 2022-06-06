const express = require('express')
const mongoose =  require('mongoose')

const app = express()

const port = 5000

app.use(express.json())

app.use(require('./BIBILOTEKA_Rout'))

mongoose.connect('mongodb+srv://AgReSSoR:Magomed95@cluster0.rdhjd.mongodb.net/bibiloteka?retryWrites=true&w=majority')

.then(() => console.log('Сервер MongooDB подключен '))
.catch(() => console.log('Ошибка при подключение'))

app.listen(port, () =>{
    console.log(`Подключение... http://localhost:${port}`)
}) 