'use strict';

var main = angular.module('main', []);

main.controller('MainController', ['$scope', 'lectureRepository', function($scope, lectureRepository){
    $scope.numberOfLectures = lectureRepository.getNumberOfLectures();
    $scope.activeLecture    = 1;

    $scope.loadActiveLecture = function(){

        lectureRepository.fetchLectureData_byLectureNumber($scope.activeLecture)
        .then(function(lecture){

            $scope.lectureContent = lecture.data;

            MathJax.Hub.Queue(["Reprocess", MathJax.Hub]);
        });
    }

    $scope.loadActiveLecture();
}]);
