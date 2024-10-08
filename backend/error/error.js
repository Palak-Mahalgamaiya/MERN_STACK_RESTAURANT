class ErrorHandler extends Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode=statusCode;

    }
}
export const  errorMiddleware=(err,req,res,next)=>
    {
       Error.message=err.message ||"internal server erroe!"
       err.statusCode=err.statusCode|| 500;
       return  res.status(err.statusCode).json(
        {
            success:false,
            message:err.message,
        }
       );
    };
export  default ErrorHandler;