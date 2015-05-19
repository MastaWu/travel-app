angular.module('travel-app', [

    'ngAnimate',
    'ui.router',
    'uiGmapgoogle-maps',
    'ui.bootstrap'

])

//TODO(app): add angular.js, ui-bootstrap, ui-router, angular-animate, angular-material, angular-google-maps, angular-chart

    .config(function($stateProvider, $urlRouteProvider){
        $urlRouteProvider.otherwise('/home');

        $stateProvider.
            state('/home',{
                url:'/home',
                views: {
                    '':{
                        templateUrl: 'views/main.html'
                    }
                }
            }
            )
    });