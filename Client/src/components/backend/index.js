const express = require("express");
// import express from 'express';

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

let theArray = [
    {
        id: '123441234',
        name: 'Joe',
        age: 21
    },
    {
        id: '458834',
        name: 'Steve',
        age: 28
    }
]

app.get('/getUsers', (req, res) =>
{
    res.send('Backend is working');
});

// app.get('/getUsers', (req, res) =>
// {
//     res.send(
//         theArray.map(product =>
//         {
//             `<h1>${product.name}</h1><br>
//             <h5>${product.age}</h5>
//         `
//         }
//         ).join(' '));
// });

const authRouter = require('./modules/authentication/router');
const userRouter = require('./modules/user/router');

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(8080, async (req, res) =>
{
    console.log('App is running on port 8080');
    try
    {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.wtmdchg.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Database is connected')
    } catch (e)
    {
        console.log(e);
    }
});

// express, nodemon, mongoose, cors, moment, dotenv, bcrypt, jsonwebtoken, passport