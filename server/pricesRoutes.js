var request = require('request');
var Config  = require(__dirname + '/./config');
var conf    = new Config();

module.exports = function(app){

    /**
     * Get the array of prices
     */
    app.get('/get-prices', function(req, res){
        var queryParams = req.originalUrl.split('?')[1];
        var url = conf.apiUrl + '/availability/rates?' + queryParams;
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });

    /**
     * Edits one of the prices
     */
    app.put('/edit-price', function(req, res){
        var url = conf.apiUrl + '/availability/rates/' + req.headers['id'];
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });
    
}