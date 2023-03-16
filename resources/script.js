

function toggleLogin() {
    $(".login-form").toggleClass("d-none");
    $(".main-page").addClass("overlay");
    document.getElementById('inputUsername').value='';
    document.getElementById('inputPassword').value='';
    $("body").addClass("isForm");
    $(".signup-form").addClass("d-none");

}
function toggleSignUp() {
    $(".signup-form").toggleClass("d-none");
    document.getElementById('inputUsername').value='';
    document.getElementById('inputPassword').value='';
    $(".login-form").toggleClass("d-none");
}
function showHome() {
  $(".login-form").addClass("d-none");
  $(".signup-form").addClass("d-none");
  $("body").removeClass("isForm");
  $(".main-page").removeClass("overlay");
  $('.account-type').removeClass('active');
  document.getElementById('inputUsername').value='';
  document.getElementById('inputPassword').value='';
  document.getElementById('inputUsername2').value='';
  document.getElementById('inputPassword2').value='';
  document.getElementById('skypeInput').value='';
  document.getElementById('phoneInput').value='';
  document.getElementById('companyInput').value='';
  document.getElementById('websiteInput').value='';
  document.getElementById('InputEmail').value='';
  document.getElementById('nameInput').value='';

}

function passwordToggle() {
    var x = document.getElementById("inputPassword");
    if (x.type === "password") {
      x.type = "text";
      $(".toggler").toggleClass("bi-eye-slash")
      $(".toggler").toggleClass("bi-eye")
    } else {
      x.type = "password";
      $(".toggler").toggleClass("bi-eye-slash")
      $(".toggler").toggleClass("bi-eye")
    }
  }
function passwordToggleCreate() {
    var x = document.getElementById("inputPassword2");
    if (x.type === "password") {
      x.type = "text";
      $(".toggler").toggleClass("bi-eye-slash")
      $(".toggler").toggleClass("bi-eye")
    } else {
      x.type = "password";
      $(".toggler").toggleClass("bi-eye-slash")
      $(".toggler").toggleClass("bi-eye")
    }
  }
function toggleActive(e){
  $('.account-type').removeClass('active');
  $(e).addClass('active');
}

