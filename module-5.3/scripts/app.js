(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .controller('FoundItemsController', FoundItemsController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var self = this;
        self.searchTerm = '';
        self.narrow = function () {
            self.message = '';
            self.found = [];
            if (self.searchTerm.length === 0) {
                self.message = 'Nothing found';
                return;
            }
            MenuSearchService.getMatchedMenuItems(self.searchTerm)
                .then(function (result) {
                    self.found = result;
                    if (result.length === 0) {
                        self.message = 'Nothing found';
                    }
                })
        };
        self.remove = function (index) {
            self.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var self = this;
        self.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                var foundItems = [];
                for (var menuItemIndex = 0; menuItemIndex < result.data.menu_items.length; menuItemIndex++) {
                    var menuItem = result.data.menu_items[menuItemIndex];
                    if (menuItem.description.indexOf(searchTerm) !== -1) {
                        foundItems.push(menuItem);
                    }
                }
                return foundItems;
            });
        }
    }

    function FoundItemsDirective() {
        return {
            templateUrl: 'foundItems.html',
            restrict: 'E',
            bindToController: true,
            controller: 'FoundItemsController as foundCtl',
            transclude: true,
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };
    }

    function FoundItemsController() {
        var self = this;
    }
})();