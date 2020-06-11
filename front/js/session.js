function setLogin () {
    sessionStorage.setItem('user_mail', document.getElementById('user_mail').value);
    sessionStorage.setItem('admin', false);
    showInfos();
}

function isLogged () {
    return sessionStorage.getItem('user_mail');
}

function showInfos () {
    while (document.getElementById('content').firstChild) document.getElementById('content').removeChild(document.getElementById('content').firstChild);
    if (isLogged()) {
        document.getElementById('authentification').style.display = 'none';
        var txt = document.createTextNode('Rebonjour, ' + sessionStorage.getItem('user_mail'));
        document.getElementById('content').appendChild(document.createElement("P").appendChild(txt));
    } else {
        document.getElementById('authentification').style.display = 'block';
    }
}   

function disconnectUser () {
    sessionStorage.removeItem('user_mail');
    sessionStorage.removeItem('admin');
    showInfos();
}

showInfos();