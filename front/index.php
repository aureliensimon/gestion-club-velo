<!DOCTYPE html>
<html>
    <head>
        <?php include 'html/head.html';?>
        
        <title>Gestion club de vélo</title>
        
        <!-- CSS -->
        <link rel="stylesheet" href="css/fiche-course.css">

        <!-- JS -->
        <script src="js/test.js" defer></script>
    </head>
    <body>
        <?php include 'html/navbar.html';?>
        <?php include 'html/fiche-course.html';?>

        <section id="authentification">
            <form>
                <label>Veuillez entrer votre adresse mail :</label>
                <input type="email" id="mail" placeholder="exemple@test.com" autofocus required>
                <input type="button" id="submit" value="Confirmer">
            </form>
        </section>

        <div id="liste-courses">
        </div>

        
        <?php include 'html/footer.html';?>
    </body>
</html>