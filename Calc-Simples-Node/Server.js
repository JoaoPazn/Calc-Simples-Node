const express = require('express')
const app = express()

app.get('/', (req,res) =>{
        res.send('Ok!');
});

app.get('/soma/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);
    if(Number.isInteger(A) && Number.isInteger(B)){
    let Sum = A + B;
    res.send("o resultado da soma é : " + Sum)
    }else{
        res.send("Um dos valores não é um número inteiro.")
    }
});

app.get('/subtracao/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);
    if(Number.isInteger(A) && Number.isInteger(B)){
    let sub = A - B;
    res.send("o resultado da subtração é : " + sub)
    }else{
        res.send("Um dos valores não é um número inteiro.")
    }

});

app.get('/mult/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);
    if(Number.isInteger(A) && Number.isInteger(B)){
    let mul = A * B;
    res.send("o resultado da multiplicação é : " + mul)
    }else{
        res.send("Um dos valores não é um número inteiro.")
    }
});

app.get('/divi/:A/:B', (req,res) =>{
    let A = parseInt(req.params.A);
    let B = parseInt(req.params.B);
    if(Number.isInteger(A) && Number.isInteger(B)){
    let div = A / B;
    res.send("o resultado da divisão é : " + div)
    }else{
        res.send("Um dos valores não é um número inteiro.")
    }
});

app.listen(3000, () => {
    console.log('Servidor em execução... ');
    console.log('http://localhost:3000/soma/6/2 ');
    console.log('http://localhost:3000/subtracao/6/2');
    console.log('http://localhost:3000/mult/6/2');
    console.log('http://localhost:3000/divi/6/2');

}); 
