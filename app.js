var app=angular.module("myApp",['mainController','ngAnimate', 'ui.router','CommonData','ngMaterial','ngMessages','SharedServiceFactoryModule'])


.config(function($stateProvider, $urlRouterProvider,$httpProvider)
       {
    
      $stateProvider
    
     
        .state('/', {
            url: '/',
            templateUrl:'app/components/Main/main.html',
            controller:'MainController',
            controllerAs:'main',
            isLogin:true
        })
        
       
        
        $urlRouterProvider.otherwise('/');
    
  


    // $httpProvider.interceptors.push('AuthInterceptor'); 
    
})




