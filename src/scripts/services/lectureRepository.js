'use strict';

main.factory('lectureRepository', ['$http', function ($http) {

    var settings = {

        lectureRelativePath: 'lectures/',
        numberOfLectures:    2
    };

    var generateLectureUri = function(lectureNumber){

        var generateLectureName = function(lectureNumber){

            return 'lecture' + (lectureNumber < 10 ? '0': '') + lectureNumber + '.json';
        };

        return settings.lectureRelativePath + generateLectureName(lectureNumber);
    };

    return {

        getNumberOfLectures: function(){

            return settings.numberOfLectures;
        },
        fetchLectureData_byLectureNumber: function(number) {

            return $http.get(generateLectureUri(number));
        }
    };
}]);
