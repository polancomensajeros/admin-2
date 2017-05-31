var request = require('request');
var Config  = require(__dirname + '/./config');
var conf    = new Config();

module.exports = function(app){

    app.get('/get-zones', function(req, res){
        var queryParams = req.originalUrl.split('?')[1];
        var url = conf.apiUrl + '/List-zone?' + queryParams;
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });

    app.post('/create-zone', function(req,res) {
        var url = conf.apiUrl + '/Add-zone';
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });

    app.post('/toggle-zone', function(req,res) {
        var url = conf.apiUrl + '/Change-status-zone';
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });
    
}