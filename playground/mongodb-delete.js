const {MongoClient,ObjectID}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Cannot connect to the database');
    }
    console.log('Connected to server');

    //deleteMany - result contains details of deletion

    /*
    db.collection('Todos').deleteMany({text:'new collection'}).then((result)=>{
        console.log(result);
    })
    */

    //deleteOne - result contains details of deletion

    /*
    db.collection('Todos').deleteOne({completed:false}).then((result)=>{
        console.log(result);
    })
    */

    //findOneAndDelete - result of this method contains the deleted object
    // result.value is the deleted document
    
    db.collection('Todos').findOneAndDelete({_id:new ObjectID('5d28388600365d4ac0fea2e8')}).then((result)=>{
        console.log(result.value);
    })
    

})