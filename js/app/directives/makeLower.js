function makeLower() {

	return {
		// restrict: 'A',
		require: 'ngModel',
		link: (s, e, a, n) => {
			n.$parsers.push(string => {
				return string.toLowerCase()
			})
			n.$formatters.push(string => {
				return string.toLowerCase()
			})
		}

	}
}

angular
	.module('app')
	.directive('makeLower', makeLower);
