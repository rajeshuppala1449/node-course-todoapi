const {MongoClient,ObjectID}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Cannot connect to the database');
    }
    console.log('Connected to server');

    db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5d29891b453be63a94f1e194')},
        { $set:{
            completed:true
         }},{
             returnOriginal:false
         }
    ).then((result)=>{
        console.log(result); 
    })

})