angular.module('clockApp', [])	
	.controller('clockController', function($scope, $log, $interval, $filter) {
		$log.info('clock controller');
		$scope.currenttime = new Date();
		$scope.format24 = false;		
		$scope.setAlarm = false;
		$scope.alarmTime = null;		
		
		function updateTime() {
			$scope.currenttime = new Date();
			$scope.displaytime = $filter('date')($scope.currenttime, $scope.format24 ? 'HH:mm:ss' : 'hh:mm:ss a');
			if ($scope.setAlarm) {
				var curtime = $filter('date')($scope.currenttime, 'HH:mm');
				if ($scope.alarmTime === curtime) {				
					$scope.setAlarm = false;
					alert('Ding!');
				}
			}
		}
		
		/*
		$timeout(function ontimer() {			
			updateTime();			
			$timeout(ontimer, 1000);
		}, 1000);
		*/
		$interval(function ontimer() {			
			updateTime();						
		}, 1000);
		
		updateTime();
	});