const {MongoClient,ObjectID}=require('mongodb') //mongodb of version 2

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Cannot connect to Server');
    }
    console.log('connected to Server');

    //db.collection('Todos').find({_id:new ObjectID('5d276cb045768f0410bf7f0b')}).toArray().then((docs)=>{
    db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        console.log(docs);
    },(err)=>{
        console.log('Unable to fetch docd');
    })
    /*
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    },(err)=>{
        console.log('Unable to fetch count');
    })
    */
    

    //db.close();

    /*
    //above code without promises
    db.collection('Todos').find().count((err,count)={
    if(err){
        console.log('Unable to fetch docd');
    }else{
        console.log(count);
    })
    */
})