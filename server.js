import app from './src/app.js'

let port = process.env.PORT || 3000;

console.log(port);

app.listen(port, async () => { 
    console.log(`Servidor escutando em http://localhost:${port}/api-docs`);
})
