const express=require("express");
const dotenv =require("dotenv").config();


connectDb();
const app=express();
const port=process.env.PORT || 5000;
const contactsRouter=require("./routes/contactRoute");
const errorHandler = require("./middleware/errorHandler");


 app.use(express.json());
 app.use("/api/contacts",contactsRouter);
 app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
