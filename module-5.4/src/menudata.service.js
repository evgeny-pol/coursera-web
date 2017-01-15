(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', ['$http', function ($http) {
            var self = this;

            self.getAllCategories = function () {
                return $http({
                    method: "GET",
                    url: 'http://davids-restaurant.herokuapp.com/categories.json'
                });
            }

            self.getItemsForCategory = function (categoryShortName) {
                return $http({
                    method: "GET",
                    url: 'http://davids-restaurant.herokuapp.com/menu_items.json',
                    params: {
                        category: categoryShortName
                    }
                })
            }
        }])
})();