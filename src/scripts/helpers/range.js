'use strict';

main.filter('range', function() {

    return function(input, min, max) {

        return (new Array(max - min + 2))
            .join('0')
            .split('')
            .reduce(function(previous, current){

                previous.value.push(previous.counter);
                previous.counter = previous.counter + 1;

                return previous;
            }, { counter: min, value: [] })
            .value;
    };
});
