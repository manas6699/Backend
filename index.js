// require('dotenv').config();

// const express = require('express');
import express from 'express'
import {} from 'dotenv/config'
const app = express();
const port = process.env.PORT;

app.get('/' , (req , res) => {
    res.send('Hello');
});

app.listen(port , () => {
    console.log(`App is running on port : ${port}`);
});