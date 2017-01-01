(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var self = this;

        self.getToBuyList = function () {
            return ShoppingListCheckOffService.toBuy;
        }

        self.itemBought = function (index) {
            ShoppingListCheckOffService.itemBought(index);
        }

        self.getMessage = function () {
            if (self.getToBuyList().length === 0) {
                return 'Everything is bought.';
            }
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var self = this;

        self.getBoughtList = function () {
            return ShoppingListCheckOffService.bought;
        }

        self.getMessage = function () {
            if (self.getBoughtList().length === 0) {
                return 'Nothing bought yet.';
            }
        }
    }

    function ShoppingListCheckOffService() {
        var self = this;
        self.toBuy = [
            { name: "Milk", count: 2 },
            { name: "Donuts", count: 200 },
            { name: "Cookies", count: 300 },
            { name: "Chocolate", count: 5 },
            { name: "Tea", count: 100 }
        ];
        self.bought = [];

        self.itemBought = function (index) {
            var item = self.toBuy[index];
            self.toBuy.splice(index, 1);
            self.bought.push(item);
        }
    }
})();