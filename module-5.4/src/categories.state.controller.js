(function () {
    angular.module('MenuApp').controller('CategoriesStateController', ['categories', function (categories) {
        var self = this;
        self.categories = categories.data;
    }])
})();