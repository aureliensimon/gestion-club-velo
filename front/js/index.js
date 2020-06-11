'use strict';

var login;
var password =' motdepasse';

if (document.cookie.split('; ').find(row => row.startsWith('username'))) {
    let fullCookie = document.cookie.split('; ').find(row => row.startsWith('username'));
    login = fullCookie.replace('username=', '');
}

function loadUser (data) {
    console.log(data);
    var text = '<h4>' + data['nom'] + ' ' + data['prenom'] + '</h4>';
    $('#authentifie').append(text);
}

$('#login').on('click', () => {
    $('#authentification').attr('style', 'display: none');
    login = $('#user_mail').val();
    document.cookie = "username=" + $('#user_mail').val();
    ajaxRequest ('GET', '../api/request.php/user/', loadUser);
});

