var sampleApp = angular.module('mainApp', ['ngRoute','ngMockE2E']);

sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
           when('/Home', {
                templateUrl: 'index.html'               
            }).
            when('/Login', {
                templateUrl: 'src/features/login.html'
            }).

            otherwise({
                redirectTo: '/Home' 
            });
    }]);