var request = require('request');
var Config  = require(__dirname + '/./config');
var conf    = new Config();

module.exports = function(app){

    app.get('/get-prices', function(req, res){
        var queryParams = req.originalUrl.split('?')[1];
        var url = conf.apiUrl + '/availability/rates?' + queryParams;
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });
    
}