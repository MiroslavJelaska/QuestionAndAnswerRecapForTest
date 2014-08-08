'use strict';

main.directive('mathjaxBind', function() {
    return {
        restrict: 'A',
        controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {

            $scope.$watch($attrs.mathjaxBind, function(text) {

                //NOTE: This algorithm works properly in most of the cases

                text.split('$$').reduce(function(previousValue, currentValue, index){
                    var textToAppend = (index % 2 == 1)
                        ? (angular
                           .element('<script type="math/tex">')
                           .html(currentValue ? currentValue : ''))
                        : (currentValue);

                    $element.append(textToAppend);
                }, $element.html());

                MathJax.Hub.Queue(['Reprocess', MathJax.Hub, $element[0]]);
            });
        }]
    };
});
