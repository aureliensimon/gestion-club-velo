'use strict';

function disconnect (){
    var text = "<?php $_SESSION=array(); ?>";
    $('#test').html(text);
    location.reload(true);
}