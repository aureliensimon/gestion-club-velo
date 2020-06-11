'use strict';

var login = 'jlr@mental.com';
//var login = 'mccall@serie.fr';
var password ='test';

$('#submit').on('click', () => {
    event.preventDefault();
    ajaxRequest ('PUT', '../api/request.php/runner/' + $('input[name=raw_mail]').val(), () => {
        location.reload(true);
    }, $("#modifier").serialize()); //serialize permet d'envoyer tout le contenu du form dans l'url
});