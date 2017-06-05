var request = require('request');
var Config  = require(__dirname + '/./config');
var conf    = new Config();

module.exports = function(app){

    /**
     * Get the array of prices
     */
    app.get('/search-companies', function(req, res){
        var queryParams = req.originalUrl.split('?')[1];
        var url = conf.apiUrl + '/search/companies?' + queryParams;
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });
    
}