angular.module('travel-app', [

    'ngAnimate',
    'ui.router',
    'uiGmapgoogle-maps',
    'ui.bootstrap'

])

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