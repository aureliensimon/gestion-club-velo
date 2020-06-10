<?php

    require ('database.php');

    function auth ($mail, $pwd) {
        $db = dbConnect();
        if (!$db) {
            header ('HTTP/1.1 503 Service Unavailable');
            exit;
        }
        return (db_auth_user($db, $mail, $pwd));
    }
?>