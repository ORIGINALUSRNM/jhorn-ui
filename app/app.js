(function() {
	angular.module('ui-jhorn', [])
		   .controller('DemoController', [function() {

		   }])
		   .directive('uijCombo', function() {
		   		return {
		   			restrict: 'AE',
		   			template: '<div>the combobox</div>'
		   		}
		   });
})();
