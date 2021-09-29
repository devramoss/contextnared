const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(5000, ()=>{
    console.log("Servidor rodando na porta 5000")
})

