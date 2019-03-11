function couponCode() {

	return {
		require: 'ngModel',
		link: (s, e, a, n) => {
			n.$validators.correct = input => {
				return /\d{2}[a-z]{4}\d{2}/i.test(input)
			}
		}
	}

}

angular
	.module('app')
	.directive('couponCode', couponCode);
