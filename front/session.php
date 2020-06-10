<?php
    session_start(); 
    
    require ('../api/auth.php');

    if (auth($_POST['user_mail'], $_POST['user_pwd'])) {
        $_SESSION['user_mail'] = $_POST['user_mail'];
        $_SESSION['user_pwd'] = $_POST['user_pwd'];
    } else {
        $_SESSION['user_mail'] = NULL;
        $_SESSION['user_pwd'] = NULL;
    }

    header("location:index.php");
?>