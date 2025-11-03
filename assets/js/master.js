$(document).ready(function () {

	document.querySelectorAll(".currentYear").forEach(el => {
		el.innerText = new Date().getFullYear();
	})

});