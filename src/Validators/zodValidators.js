export const validate = (schema) =>{

    //It returns a validating middleWare
    return async (req,res,next)=>{
        try{
            console.log(req.body);
            schema.parse(req.body);    //req body is passed from the parse function of the schema 
            next();            
        } catch(error) {
            return res.status(400).json({
                error: error.errors ,
                success: false,
                message: 'Validation Failed'
            });
        }
    }
}