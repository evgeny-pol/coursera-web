(function () {
    'use strict';

    angular.module('public')
    .controller('MyInfoStateController', ['user', 'ApiPath', 'favdish', function (user, ApiPath, favdish) {
        var self = this;
        self.basePath = ApiPath;
        self.user = user;
        self.favdish = favdish;
    }])
}());
