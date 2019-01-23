// function modalExit(elem) {
//     var a = document.getElementsByID('registration')
//     for (i = 0; i < a.length; i++) {
//         a[i].classList.remove('exit')
//     }
//     elem.classList.add('exit');
// }

// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// validate form
$("#rego-form").validate({
  errorElement: 'span',
  errorClass: 'help-inline',
  rules: {
      firstname: "required",
      lastname: "required",
      company: "required",
      phone: {
        required: true,
        number: true
      },
      email: {
          required: true,
          email: true
      }
  }
});

window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
    document.getElementById('contactForm').addEventListener('submit', function() {

      // Get the value of the name field.
      var name = document.getElementById('firstname').value;
      // Save the name in localStorage.
      localStorage.setItem('firstname', name);

    });
  }

  var name = localStorage.getItem('name');
  if (name != "undefined" || name != "null") {
    document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
  } else {
    document.getElementById('welcomeMessage').innerHTML = "Hello!";
  }
}