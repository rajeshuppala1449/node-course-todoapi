const MongoClient=require('mongodb').MongoClient; //mongodb of version 2
/*
const ObjectId=require('mongodb').ObjectID;
var obj=new ObjectId();
console.log(obj)//every time a random id is generated 
*/
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Cannot connect to Server');
    }
    console.log('connected to Server');

    db.collection('Todos').insertOne({
        text:'new collection',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Cannot add data');
        }
        //result.ops contains the recently added document
        console.log(JSON.stringify(result.ops,undefined,2));
        //console.log(result.ops[0]._id.getTimestamp());
    })
    db.close();
})


/*
code for above if mongodb of version 3 used
const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Cannot connect to Server');
    }
    console.log('connected to Server');
    const db=client.db('TodoApp');
    db.collection('Todos').insertOne({
        text:'new collection',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Cannot add data');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    client.close();
})
*/