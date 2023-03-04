import mongoose from 'mongoose'

const connectDatabase = () =>{
    console.log("wait conecting to the db")

    mongoose
    .connect(
        "mongodb+srv://root:d45s4Ha@cluster0.3j1eop6.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true}
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error))
}

export default connectDatabase;