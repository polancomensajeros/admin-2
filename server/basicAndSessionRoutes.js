var express = require('express');
var request = require('request');
var Config  = require(__dirname + '/./config');
var conf    = new Config();

module.exports = function(app){

    app.use(express.static('dist'));

    app.post('/oauth/token', function(req,res) {
        var url = conf.apiUrl + '/oauth/token';
        req.headers['client_id'] = process.env.CLIENT_ID;
        req.headers['client_secret'] = process.env.CLIENT_SECRET;
        req.pipe(request(url)).pipe(res);
    });

    app.get('/oauth/resources', function(req,res) {
        var url = conf.apiUrl + '/oauth/resources?access_token=' + req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });

    app.post('/recoverpassword', function(req, res){
        var url = conf.apiUrl + '/recoverpassword';
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });

    app.post('/refresh-token', function(req, res){
        var url = conf.apiUrl + '/oauth/token';
        req.headers['client_id'] = process.env.CLIENT_ID;
        req.headers['client_secret'] = process.env.CLIENT_SECRET;
        req.pipe(request(url)).pipe(res);
    });

    app.post('/changePassword', function(req, res){
        var url = conf.apiUrl + '/changepassword';
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });

    app.post('/cities', function(req, res){
        var url = conf.apiUrl + '/cities';
        req.headers['access_token'] = req.header('X-Auth-Token');
        req.pipe(request(url)).pipe(res);
    });
    
}