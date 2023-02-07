import app from './src/app.js'

let PORT = process.env.PORT || 3000;

console.log(PORT);

app.listen(PORT, async () => { 
    console.log(`Servidor escutando em http://localhost:${PORT}`);
})
