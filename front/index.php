<?php session_start(); ?>

<!DOCTYPE html>
<html>
    <head>
        <?php include 'html/head.html';?>
        
        <title>Gestion club de vélo</title>
        <script src="js/test2.js" defer></script>
        
    </head>
    <body id="test">
        <?php include 'html/navbar.html'; ?>

        <?php
            if ($_SESSION['user_mail'] != NULL) {
                echo '<span>Rebonjour, '. $_SESSION['user_mail'] .'</span>';
                if ($_SESSION['admin'] != NULL) {
                    echo '<br><span>Vous êtes authentifié comme administrateur.</span>';
                } else {
                    echo '<br><span>Vous êtes authentifié comme responsable club.</span>';
                }
            } else {
                include 'html/form-auth.html';
            }
        ?>
        
        <?php include 'html/footer.html';?>
    </body>
</html>