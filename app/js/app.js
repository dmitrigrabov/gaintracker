var gainTrackerApp = angular.module( 'gainTrackerApp', [
  'ngRoute',
  'gainTrackerControllers'
]);

gainTrackerApp.config([ '$routeProvider', function( $routeProvider ) {
	
	var templatePath = '/app/templates/';

	$routeProvider.
		when('/', {
			templateUrl: templatePath + 'home.html',
			controller: 'HomeCtrl'
		}).
		when('/day-list', {
			templateUrl: templatePath + 'day-list.html',
			controller: 'DayListCtrl'
		}).
		when('/day/:dayId', {
			templateUrl: templatePath + 'day.html',
			controller: 'DayCtrl'
		}).
		when('/exercise/:exerciseId', {
			templateUrl: templatePath + 'exercise.html',
			controller: 'ExerciseCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);