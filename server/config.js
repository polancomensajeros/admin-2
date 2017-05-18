module.exports = function(){

    const development   = {
        apiUrl:         'http://dev.api.mensajerosurbanos.com',
        clientId:       process.env.CLIENT_ID,
        clientSecret:   process.env.CLIENT_SECRET
    };

    const production    = {
        apiUrl:         'https://beta.api.mensajerosurbanos.com',
        clientId:       process.env.CLIENT_ID,
        clientSecret:   process.env.CLIENT_SECRET
    };

    switch(process.env.NODE_ENV){

        case 'development':
            return development;

        case 'production':
            return production;

        default:
            return development;
    }
    
};