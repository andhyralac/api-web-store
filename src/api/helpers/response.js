const responseSuccess = (req, res, message, status) => {
    res.status(status || 200)
       .send({
           body: message
       })
}

const responseError = (req, res, message, status, details) => {
    console.error(`[handle error]: ${details}`);

    res.status(status || 500)
        .send({
            error: message,
            body: ''
        })
}

module.exports = { 
    responseSuccess,
    responseError
}