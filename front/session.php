<?php
    session_start(); 
    
    require ('../api/auth.php');

    $user = auth($_POST['user_mail'], $_POST['user_pwd']);

    if (count($user) === 1) {
        $_SESSION['user_mail'] = $user[0]['mail'];
        $_SESSION['user_pwd'] = $user[0]['password'];
        $_SESSION['admin'] = $user[0]['admin'];
    } else {
        $_SESSION['user_mail'] = NULL;
        $_SESSION['user_pwd'] = NULL;
        $_SESSION['admin'] = NULL;

    }

    header("location:index.php");
?>