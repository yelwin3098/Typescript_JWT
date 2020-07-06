import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tsnode',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(db=>console.log('Databse is connected'))
    .catch(err=>console.log(err));