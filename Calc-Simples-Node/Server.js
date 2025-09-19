const express = require('express')
const app = express()

app.get('/', (req,res) =>{
        res.send('Ok!');
});

app.get('/soma/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);

    let Sum = A + B;

    res.send("o resultado da soma é : " + Sum)
});

app.get('/subtracao/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);

    let Sub = A - B;

    res.send("o resultado da subtracao é : " + Sub)
});

app.get('/mult/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);

    let mul = A * B;

    res.send("o resultado da multiplicacao é : " + mul)
});

app.get('/divi/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);

    let div = A / B;

    res.send("o resultado da divisao é : " + div)
});

app.listen(3000, () => {
    console.log('Servidor em execução... ');
    console.log('http://localhost:3000/soma/6/2 ');
    console.log('http://localhost:3000/subtracao/6/2');
    console.log('http://localhost:3000/mult/6/2');
    console.log('http://localhost:3000/divi/6/2');

}); 
