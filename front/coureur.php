<!DOCTYPE html>
<html>
    <head>
        <?php include 'html/head.html';?>

        <title>Gestion des membres du club de vélo</title>
        
        <!-- CSS -->
        <link rel="stylesheet" href="css/fiche-coureur.css">

        <!-- JS -->
        <script src="js/ajax.js" defer></script>
        <script src="js/script.js" defer></script>

    </head>
    <body>
        <?php include 'html/navbar.html';?>
        <?php //include 'html/fiche-coureur.html';?>

        <section id="runners"></section>
        <section id="runner" style="display: none"></section>
        
        <?php include 'html/footer.html';?>
    </body>
</html>