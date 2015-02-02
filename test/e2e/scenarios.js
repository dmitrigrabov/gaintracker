'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('GainTracker App', function() {

	it('Home page Tracker button should redirect to day list', function() {
		browser.get( '/' );

		element( by.css( '.fn-track' ) ).click();

		browser.getLocationAbsUrl().then( function( url ) {
			expect( url ).toBe( '/day-list' );
		});
	});

	describe('Day List view', function() {

		beforeEach(function() {
			browser.get('/#/day-list');
		});

		it( 'should display 3 days', function() {
			var phoneList	= element.all( by.repeater( 'day in days' ) );

			expect( phoneList.count() ).toBe( 3 );
		});


		it( 'should display expected days', function() {
			var dayList = element.all( by.repeater('day in days' ).column( 'day.name' ));

			function getDayNames() {
				return dayList.map( function( elm ) {
					return elm.getText();
				});
			}

			expect( getDayNames() ).toEqual([
				"Chest and Shoulders",
				"Squats and Deadlifts",
				"Biceps and Triceps"
			]);
		});

		it( 'should redirect Exercise page when link is clicked', function() {
			element(by.cssContainingText( '.ng-binding', 'Squats and Deadlifts' )).click();

			browser.getLocationAbsUrl().then( function( url ) {
				expect( url ).toBe( '/day/2' );
			});
		});
	});

	describe( 'Exerise List View', function() {

		beforeEach(function() {
			browser.get('#/day/2');
		});

		it( 'should display 3 exercises', function() {
			var exerciseList	= element.all( by.repeater( 'exercise in exercises' ) );

			expect( exerciseList.count() ).toBe( 3 );
		});

		it( 'should display relevant exercises', function() {
			var exerciseList = element.all( by.repeater('exercise in exercises' ).column( 'exercise.name' ));

			function getExerciseNames() {
				return exerciseList.map( function( elm ) {
					return elm.getText();
				});
			}

			expect( getExerciseNames() ).toEqual([
				"Deadlift",
				"Back Squat",
				"Front Squat"
			]);
		});
	});
});
