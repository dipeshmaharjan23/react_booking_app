const createError =function (status,message){
    const err = new Error();
    err.status = status;
    err.message ="Sorry not found"
}

module.exports = createError;