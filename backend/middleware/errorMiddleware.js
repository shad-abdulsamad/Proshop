const notFound = (req, res, next)=>{
    const error = new Error(`Not Found -  ${req.originalURL}`);
    res.status(404);
    next(error)
};

/* const errorHandler = (err, req, res, next) =>{
    let statusCode = res.stausCode === 200 ? 500: res.stausCode;
    let message = err.message;

    // check for mongoose bad ObjectId
    if(err.name === 'CastError' && err.kind ==='ObjectId'){
        message = 'Resource not found';
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV=== 'production' ? null: err.stack
    });
}; */

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500; // Use err.statusCode if available, otherwise default to 500
    let message = err.message;

    // Check for mongoose bad ObjectId
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not found';
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};


export {notFound, errorHandler};