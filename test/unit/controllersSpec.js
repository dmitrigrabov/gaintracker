'use strict';

describe('Gain Tracker controllers', function() {

	describe('DayListCtrl', function(){
		var scope, ctrl, $httpBackend;

		beforeEach(module('gainTrackerApp'));

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('/app/api/days.json').respond([{
				id		: 1,
				name	: "Test Day Arms"
			},
			{
				id		: 2,
				name	: "Test Day Legs"
			}]);

			scope = $rootScope.$new();
			ctrl = $controller('DayListCtrl', {$scope: scope});
		}));


		it('should create "days" model with 2 days fetched via ajax', function() {
			expect( scope.days ).toBeUndefined();
			$httpBackend.flush();

			expect( scope.days ).toEqual([{
				id		: 1,
				name	: "Test Day Arms"
			},
			{
				id		: 2,
				name	: "Test Day Legs"
			}]);
		});
	}); 

	describe('DayCtrl', function(){
		var scope, ctrl, $httpBackend;

		beforeEach( module( 'gainTrackerApp' ) );

		beforeEach( inject( function( _$httpBackend_, $rootScope, $controller ) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET( '/app/api/exercises.json' ).respond([{
				id		: 1,
				name	: "Test Day Arms"
			},
			{
				id		: 2,
				name	: "Test Day Legs"
			}]);

			scope = $rootScope.$new();
			ctrl = $controller( 'DayCtrl', {
				$scope		: scope,
				$routeParams: {
					dayId	: 1
				}
			});
		}));

		it('should create "exercises" model with 2 exercises fetched via ajax according to dayId', function() {
			expect( scope.exercises ).toBeUndefined();
			expect( scope.dayId ).toEqual( 1 );

			$httpBackend.flush();

			expect( scope.exercises ).toEqual([{
				id		: 1,
				name	: "Test Day Arms"
			},
			{
				id		: 2,
				name	: "Test Day Legs"
			}]);
		});
	});

	describe('ExerciseCtrl', function(){
		var scope, ctrl;

		beforeEach( module( 'gainTrackerApp' ) );

		beforeEach( inject( function( $rootScope, $controller ) {
			scope = $rootScope.$new();
			ctrl = $controller( 'ExerciseCtrl', {
				$scope		: scope,
				$routeParams: {
					exerciseId	: 1
				}
			});
		}));

		it('should set exerciseId', function() {
			expect( scope.exerciseId ).toEqual( 1 );
		});
	});
});
