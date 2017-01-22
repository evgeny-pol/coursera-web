(function () {
    "use strict";

    angular.module('common', [])
    .constant('ApiPath', 'https://afternoon-ocean-61108.herokuapp.com')
    .config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();
