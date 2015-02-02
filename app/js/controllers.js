'use strict';

var gainTrackerControllers = angular.module( 'gainTrackerControllers', [] );

gainTrackerControllers.controller( 'HomeCtrl', [ '$scope', function( $scope ) {
	
}]);

gainTrackerControllers.controller( 'DayListCtrl', [ '$scope', '$http',
	function( $scope, $http ) {
		$http.get('/app/api/days.json').success( function( days ) {
			$scope.days = days;
		});
	}]);

gainTrackerControllers.controller( 'DayCtrl', [ '$scope', '$http', '$routeParams', 
	function( $scope, $http, $routeParams ) {
		$scope.dayId = $routeParams.dayId;

		$http.get('/app/api/exercises.json').success( function( exercises ) {
			$scope.exercises = exercises;
		});
	}]);

gainTrackerControllers.controller( 'ExerciseCtrl', ['$scope', '$routeParams', 
	function( $scope, $routeParams ) {
		$scope.exerciseId = $routeParams.exerciseId;
	}]);