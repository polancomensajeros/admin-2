var request = require('request');
var Config  = require(__dirname + '/./config');
var conf    = new Config();

module.exports = function(app){

    /**
     * Get the array of spots
     */
    app.get('/get-spots', function(req, res){
        var queryParams = req.originalUrl.split('?')[1];
        var url = conf.apiUrl + '/List-store?' + queryParams;
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });

    app.post('/toggle-spot', function(req,res) {
        var url = conf.apiUrl + '/Change-status-store';
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });
    
}