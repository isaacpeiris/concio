$(document).ready(function () {

// Get user object from local storage
const user = JSON.parse(window.localStorage.getItem('user'));
// Set user info in HTML
$('.userFirstName').text(user['firstname']);
$('.userLastName').text(user['lastname']);
$('.userCompany').text(user['company']);

});