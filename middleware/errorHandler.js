const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode:500;
    res.json({title: "Not Found",message:err.message,stakTrace: err.stack});4
    res.json({title:})
};

module.exports=errorHandler;
