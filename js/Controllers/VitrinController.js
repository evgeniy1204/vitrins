vitrinApp.controller('VitrinController', function($scope, $http) {

    $scope.mainSentence = [];
    $scope.otherSentence = [];

    $http.get("/sandbox/main.json")
        .then(function(response) {
            var sentences = response.data;
            angular.forEach(sentences, function (value, key) {
                var itemSentence = angular.fromJson(value);
                $scope.mainSentence.push(itemSentence);
            });
        }, function () {
            alert("error");
        });

    $http.get("/sandbox/other.json")
        .then(function(response) {
            var sentences = response.data;
            angular.forEach(sentences, function (value, key) {
                var itemSentence = angular.fromJson(value);
                $scope.otherSentence.push(itemSentence);
            });
        }, function () {
            alert("error");
        });
});