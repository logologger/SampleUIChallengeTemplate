angular.module('CommonData',[])
    
    .factory('CommonDataFactory', function() {
    var CommonDataFactory = {};
        CommonDataFactory.setDeskNo = function(DeskNo) {
            CommonDataFactory.DeskNo = DeskNo;
            sessionStorage.DeskNo = DeskNo;
        };
        CommonDataFactory.getDeskNo = function() {
            return sessionStorage.DeskNo;
        };
        
      
    return CommonDataFactory;
});
