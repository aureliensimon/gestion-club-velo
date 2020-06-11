<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Aurélien SIMON - Aubane LECORCHET">

        <!-- FONTS -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap" rel="stylesheet"> 

        <!-- Bootstrap / JQuery -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

        <!-- CSS -->
        <link rel="stylesheet" href="css/color.css">
        <link rel="stylesheet" href="css/navbar.css">
        <link rel="stylesheet" href="css/footer.css">

        <title>Gestion des membres du club de vélo</title>
        
        <!-- CSS -->
        <link rel="stylesheet" href="css/fiche-course.css">

        <!-- JS -->
        <script src="js/ajax.js" defer></script>
        <script src="js/course.js" defer></script>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.php">GestionVelo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="coureur.php">Coureurs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="course.php">Courses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Compétitions</a>
                </li>
                </ul>
            </div>
        </nav>
        <div class="fiche-course" id="fiche-course-modele" style="display: none;">
            <div class="first-row">
                <img class="trophy-img" src="img/trophy.png"></img>
                <span class="nom-course"></span>
                <span class="date">(<span class="date-course"></span>)</span>
                <button class="ajouter-coureur">Inscrire un joueur</button>
            </div>
            <div class="second-row">
                <div class="course-coureur">
                    <u>Joueurs du club inscrits : </u>
                    <span class="nom-coureur"></span>
                </div>
                <div>
                    Nombre d'inscriptions max : <span id="inscriptions_max"></span>
                    <br>
                    Longueur du tour : <span id="longueur_tour"></span>
                    <br>
                    Nombre de tours : <span id="nb_tour"></span>
                    <br>
                    Distance totale : <span id="distance"></span> km
                </div>
                <div>
                    organisé par <span id="club_orga"></span>
                </div>
            </div>
        </div>

        <section id="liste-courses"></section>
        <section id="inscription-coureur"></Section>

        <footer class="page-footer font-small">
            <div class="footer-copyright text-center py-3">© 2020 Copyright :
            <a href="https://github.com/aureliensimon/gestion-club-velo">Aubane Lecorchet - Aurélien Simon</a>
            </div>
            <div><input type="submit" value="Se déconnecter" onclick="disconnectUser()"></div>
        </footer>
    </body>
</html>