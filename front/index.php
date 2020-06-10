<!DOCTYPE html>
<html>
    <head>
        <?php include 'html/head.html';?>
        
        <title>Gestion club de vélo</title>
        
    </head>
    <body>
        <?php include 'html/navbar.html';?>

        <section id="authentification">
            <form>
                <label>Veuillez entrer votre adresse mail :</label>
                <input type="email" id="mail" placeholder="exemple@test.com" autofocus required>
                <input type="password" id="pwd" placeholder="password" autofocus required>
                <input type="button" id="submit" value="Confirmer">
            </form>
        </section>
        
        <?php include 'html/footer.html';?>
    </body>
</html>