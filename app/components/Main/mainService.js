angular.module('authService',[])

.factory('Auth',function($http,$q,AuthToken,SharedServiceFactory)
        {
   
    var authFactory={};
    
    
    authFactory.login=function(username,password)
    {
         angular.element(document.querySelector('body')).addClass('loading');
        angular.element(document.querySelector('body')).css("background","rgba(0,0,0,0.5)");
        var data={
             username:username,
            password:password
            
        };
        

 
        return $http.post('/api/login',{
            username:username,
            password:password
        })
        
 
        .success(function(data)
                {
                    console.log("admin is"+JSON.stringify(data));
                   var isAdmin=btoa("isAdmin");
                    localStorage.ghfuydffuifuilfuif=btoa(btoa(btoa(btoa(btoa(btoa(data.Admin))))));
                    console.log("local value is"+localStorage.isAdmin);
             angular.element(document.querySelector('body')).removeClass('loading');
            angular.element(document.querySelector('body')).css("background","");
            AuthToken.setToken(data.token);
            return data;
        })
        
    }
    
    
  
    
    
       
   
    
    return authFactory;
})





    










