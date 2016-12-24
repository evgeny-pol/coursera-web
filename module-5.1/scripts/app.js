(function () {
    'use strict';

    var module = angular.module('LunchCheck', []);
    module.controller('LunchCheckController', ['$scope', LunchCheckController]);

    function LunchCheckController($scope) {
        $scope.message = '';

        $scope.checkLunch = function () {
            if ($scope.lunch === undefined || $scope.lunch.length === 0) {
                $scope.dataState = 'noData';
                $scope.message = 'Please enter data first';
                return;
            }
            else {
                $scope.dataState = 'dataPresent';
            }

            var lunchItems = $scope.lunch.split(',');
            var nonEmptyItemsCount = 0;

            for (var i = 0; i < lunchItems.length; i++) {
                var item = lunchItems[i];
                if (item.trim() !== '') {
                    nonEmptyItemsCount++;
                }
            }

            if (nonEmptyItemsCount <= 3) {
                $scope.message = 'Enjoy!';
                return;
            }
            else {
                $scope.message = 'Too much!';
                return;
            }
        };
    }
})();