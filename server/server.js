var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/Todo');
var {user}=require('./models/user');

var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    })

    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.send(err);
    })
})



app.listen(3000,()=>{
    console.log('server started listening');
})

/*
//Creating instance of a model(document) and adding it to database
var newTodo=new Todo({
    text:'go for shopping',
})

newTodo.save().then((doc)=>{
    console.log('saved:',doc);
},(err)=>{
    console.log('Cannot save doc')
})
*/


