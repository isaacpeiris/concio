$(document).ready(function () {

  if (!localStorage.getItem('user')) {
      // On submit
      $("#contactForm").submit(function(event) {
        const formValues = $('#contactForm').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        // Save users deets to local storage
        localStorage.setItem('user', JSON.stringify(formValues));
      });
  } else {
      // Get user object from local storage
      const user = JSON.parse(window.localStorage.getItem('user'));
      // Set user info in HTML
      $('.userFirstName').text(user['firstname']);
      $('.userLastName').text(user['lastname']);
      $('.userCompany').text(user['company']);
    };
});