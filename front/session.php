<?php
    session_start(); 
    
    require ('../api/auth.php');

    if (auth($_POST['user_mail'], $_POST['user_pwd'], $_POST['admin'])) {
        $_SESSION['user_mail'] = $_POST['user_mail'];
        $_SESSION['user_pwd'] = $_POST['user_pwd'];
        $_SESSION['admin'] = $_POST['admin'];
    } else {
        $_SESSION['user_mail'] = NULL;
        $_SESSION['user_pwd'] = NULL;
        $_SESSION['admin'] = NULL;

    }

    header("location:index.php");
?>