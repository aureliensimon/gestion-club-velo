'use strict';

//----------------------------------------------------------------------------
//--- ajaxRequest ------------------------------------------------------------
//----------------------------------------------------------------------------
// Doing the Request with the php functions.
function ajaxRequest (type, url, callback, data = null) {
    let xhr = new XMLHttpRequest ();
    if (type == 'GET' && data != null) {
        url += '?' + data;
    }
    xhr.open (type, url);
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(login)); 
    xhr.onload = () => {
        switch (xhr.status) {
            case 200:
            case 201: 
                var data = JSON.parse(xhr.responseText);
                callback(data);
                break;
            default:
                httpErrors(xhr.status);
        }
    };
    xhr.send(data);
}

//----------------------------------------------------------------------------
//--- httpErrors -------------------------------------------------------------
//----------------------------------------------------------------------------
// Preparing the errors messages
function httpErrors (errorCode) {
    let message = {
        400: 'requête incorrecte',
        401: 'Authentifiez-vous',
        403: 'Accès refusé',
        404: 'Page non trouvée',
        500: 'Erreur interne du serveur',
        503: 'Service indisponible',
    };

    $('#errors').html('<i class="fa fa-exclamation-circle"></i> <strong>'+ errorCode+ ':' + message[errorCode] + '</strong>');
    $('#errors').show();
}