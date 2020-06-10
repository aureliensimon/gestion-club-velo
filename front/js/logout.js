'use strict';

function disconnect (){
    ajaxRequest ('GET', '../api/logout.php', () => {
        console.log('ok boomer');
    });
    location.reload(true);
}