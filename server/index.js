const express= require('express')
const app=express()
const db= require('mongoose')
const PORT=2000
const URL='mongodb://localhost'


db.connect()


app.listen(PORT,()=>{
    console.log('backend ')
})