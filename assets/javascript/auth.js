// signup method
$('#create').on('click', function () {
    $("#create").hide();
    $("#login").hide();
    
    $('#signup-form').css('display', 'block');
});

$('#signup-form').on('submit', function (e) {
    e.preventDefault();

    const signupForm = document.querySelector('#signup-form');
    const email = signupForm['create-email'].value;
    const password = signupForm['create-password'].value;

    // sign up a user
   
    auth.createUserWithEmailAndPassword(email, password).then(function() {
        window.location.href = "./dashboard.html"
    }).catch(function(error) {
        $('#error-message').text(error.message);       
    });
});



// login method
$('#login').on('click', function () {
    $("#create").hide();
    $("#login").hide();

    $('#login-form').css('display', 'block');
});

$('#login-form').on('submit', function (e) {
    e.preventDefault();

    const loginForm = document.querySelector('#login-form');
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(function() {
        window.location.href = "./dashboard.html"
    }).catch(function(error) {
        $('#error-message').text(error.message);       
    });
});

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});
//   logout method
$('#logout').on('click', function () {
    auth.signOut().then(() => {
        console.log('user signed out');
        $('#news').hide();
        $('#navig').hide();

        $('#create').show();
        $('#login').show();
        $('#info').show();
    })

});

