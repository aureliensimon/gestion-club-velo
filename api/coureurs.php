<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Aurélien SIMON - Aubane LECORCHET">
        <title>Gestion club de vélo</title>
    </head>
    <body>
        <script src="../front/js/modif_coureur.js" defer></script>
        <script src="../front/js/ajax.js" defer></script>
        <header></header>

        <?php
         
        require ('database.php');
        $db = dbConnect();
        if (!$db) { 
            header ('HTTP/1.1 503 Service Unvailable');
            exit;
        }

        ?>

        <section id="show_runners">
            <?php

            $mail = "mccall@serie.fr";
            $user = db_select_club($db, $mail);
            foreach ($user as $key => $value) {
                $runners = db_select_runners($db, $value['club']);
            } 
            ?>
        
            <table id="tableau">
                <?php
                foreach ($runners as $key => $value) { 
                    if ($value['valide'] != NULL) { 
                ?>
                        <tr>
                            <th> <?= $value['nom'], ' ', $value['prenom']; ?> </th>
                            <th> <?= $value['categorie_categorie_valeur']; ?></th>
                            <th> <input type="button" id="modify" value="Modifier" onclick="modify_runner()"></th>
                        </tr>
                        <tr>
                            <td> <img src="../front/img/mail.png" alt="mail"> <?= $value['mail']; ?> </td>
                            <td> <?= $value['num_licence']; ?> </td>
                        </tr>
                        <tr>
                            <td> <img src="../front/img/trophy.png" alt="trophy"><?= $value['categorie']; ?> </td>
                            <td> CODE INSEE: <?= $value['code_insee']; ?> </td>
                        </tr>
                <?php 
                    } 
                }
                ?>
            </table>
        </section>

        <section id="modif_runner"></section>

        <footer></footer>
    </body>
</html>