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
    var text_cookie = '<br><br><h6>Nous allons stocker votre adresse mail sur un cookie.<br><br><img class="cookie" src="img/cookie.jpg"></h6>';
    $('#authentifie').append(text_cookie);
}

$('#login').on('click', () => {
    $('#authentification').attr('style', 'display: none');
    login = $('#user_mail').val();
    document.cookie = "username=" + $('#user_mail').val();
    ajaxRequest ('GET', 'http://prj-cir2-web-api.monposte/request.php/user/', loadUser);
});

