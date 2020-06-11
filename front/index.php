<?php @session_start(); ?>

<!DOCTYPE html>
<html>
    <head>
        <?php include 'html/head.html';?>
        
        <title>Gestion club de vélo</title>
        <script src="js/ajax.js" defer></script>
        <script src="js/session.js" defer></script>
        <script src="js/logout.js" defer></script>
        
    </head>
    <body>
        <?php include 'html/navbar.html'; ?>
        <?php include 'html/form-auth.html'; ?>

        <div id="content"></div>
        
        <?php include 'html/footer.html';?>
    </body>
</html>