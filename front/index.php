<?php session_start(); ?>

<!DOCTYPE html>
<html>
    <head>
        <?php include 'html/head.html';?>
        
        <title>Gestion club de vélo</title>
        
    </head>
    <body>
        <?php include 'html/navbar.html';?>

        <?php
            if ($_SESSION['user_mail'] != NULL) {
                echo '<span>Rebonjour, '. $_SESSION['user_mail'] .'</span>';
            } else {
                include 'html/form-auth.html';
            }
        ?>
        
        <?php include 'html/footer.html';?>
    </body>
</html>