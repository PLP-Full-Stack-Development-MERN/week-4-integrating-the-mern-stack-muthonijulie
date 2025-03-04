const logger=((req,res,next)=>{
    console.log(`Request received on ${new Date().toLocaleString('en-US',{dataStyle:'full',timeStyle:'long'})}`)
    next()

});
module.exports=logger;