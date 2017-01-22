(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpStateController', ['MenuService', 'SignUpService', function (MenuService, SignUpService, ApiPath) {
            var self = this;
            self.submit = function () {
                var request = MenuService.getMenuItem(self.user.favdish)
                    .then(function (response) {
                        SignUpService.user = {
                            firstname: self.user.firstname,
                            lastname: self.user.lastname,
                            email: self.user.email,
                            phone: self.user.phone,
                            favdish: self.user.favdish
                        };
                        self.favdisherror = '';
                        self.info = 'Your information has been saved.';
                    })
                    .catch(function (error) {
                        self.favdisherror = 'No such menu number exists';
                        self.info = '';
                    });
            }
        }]);
})();
