$(document).ready(function () {

  if (!localStorage.getItem('user')) {
      // On mobile, make modal scrollable
      $('body').addClass('modal-active');

      // Initialise modal
      $('#registration-modal').modal();
      // Prevent ability to click out of it
      $('#registration-modal').modal({dismissible: false});
      // Show modal
      $('#registration-modal').modal('open');

      // validate form
      $("#rego-form").validate({
          errorElement: 'span',
          errorClass: 'help-inline',
          rules: {
              name: "required",
              email: {
                  required: true,
                  email: true
              },
              school: "required",
              position: {
                  required: true
              }
          }
      });

      // On submit
      $("#rego-form").submit(function(event) {
          const valid = $("#rego-form").valid();
          const recaptcha = $("#g-recaptcha-response").val();

          // If captcha invalid
          if (recaptcha === "") {
              event.preventDefault();
              $('.g-recaptcha').addClass('invalid-captcha');
              // If captcha valid but form invalid
          } else if (recaptcha !== "" && !valid) {
              $('.g-recaptcha').removeClass('invalid-captcha');
              // Recaptcha and form both valid - submits form
          } else if (recaptcha !== "" && valid) {
              $('.g-recaptcha').removeClass('invalid-captcha');
              const formValues = $('#rego-form').serializeArray().reduce(function(obj, item) {
                  obj[item.name] = item.value;
                  return obj;
              }, {});
              delete formValues['g-recaptcha-response'];
              // Save users deets to local storage
              localStorage.setItem('user', JSON.stringify(formValues));
          }
      });
  } else {
      // Get user object from local storage
      const user = JSON.parse(window.localStorage.getItem('user'));
      // Set user school in HTML
      $('.userSchoolName').text(user['school']);
    };
});