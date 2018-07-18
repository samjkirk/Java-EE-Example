(function() {

    var MovieController = function() {

        var vm = this;

        vm.isHidden = false;

        vm.movies = [
            {'id': 1, 'title': 'Fight Club', 'genre': 'Drama', 'rating': '18'},
            {'id': 2, 'title': 'Pulp Fiction', 'genre': 'Action', 'rating': '18'},
            {'id': 3, 'title': 'Dunkirk', 'genre': 'Action', 'rating': '18'},
            {'id': 4, 'title': 'Inception', 'genre': 'Sci-Fi', 'rating': '15'},
            {'id': 5, 'title': 'Fight Club', 'genre': 'Drama', 'rating': '18'},
            {'id': 6, 'title': 'Pulp Fiction', 'genre': 'Action', 'rating': '18'},
            {'id': 7, 'title': 'Dunkirk', 'genre': 'Action', 'rating': '18'},
            {'id': 8, 'title': 'Inception', 'genre': 'Sci-Fi', 'rating': '15'}
        ];

        vm.hideTable = function()
        {
            vm.isHidden = !vm.isHidden;
        };

        vm.changeColour = function(color)
        {
            vm.color = {
                'color': color,
            };
        }
    };

    angular.module('movieApp').controller('movieController', [MovieController]);
}());