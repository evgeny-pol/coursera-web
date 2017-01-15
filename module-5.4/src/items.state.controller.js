(function () {
    angular.module('MenuApp').controller('ItemsStateController', ['items', function (items) {
        var self = this;
        self.items = items.data.menu_items;
    }])
})();