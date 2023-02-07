import app from './src/app.js'

let port = process.env.PORT;

console.log(port);

if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

app.listen(port, async () => { 
    console.log(`Servidor escutando em http://localhost:${port}`);
})
