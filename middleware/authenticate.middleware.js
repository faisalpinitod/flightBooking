
const jwt=require('jsonwebtoken')

const authenticate=(req,res,next)=>{
    const token=req.headers.authentication

    if(!token){
        res.send('Please Login First')
    }
    jwt.verify(token,"MASAI",(err,decoded)=>{
        if(err){
            res.send('Please Login First')
        }else{
            next()
        }
    })
}

module.exports={
    authenticate
}