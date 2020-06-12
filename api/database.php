<?php
require_once ('constants.php');

//----------------------------------------------------------------------------
//--- dbConnect --------------------------------------------------------------
//----------------------------------------------------------------------------
// Création de la connexion à la base de données
// on return False si la connexion échoue
function dbConnect() {
  try {
      $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    }
    catch (PDOException $exception) {
      error_log('Connection error: '.$exception->getMessage());
      return false;
    }
    return $db;
}

//----------------------------------------------------------------------------
//--- db_auth_user -----------------------------------------------------------
//----------------------------------------------------------------------------
// Fonction qui authentifie et vérifie que le user est correct
// On return False si la requête est incorrecte
function db_auth_user($db, $mail) {
    try {
        $query = $db->prepare('SELECT * 
                               FROM user
                               WHERE mail=:mail;');
        $query->bindParam(':mail', $mail, PDO::PARAM_STR);
        $query->execute();
        $response = $query->fetch(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_select_club ---------------------------------------------------------
//----------------------------------------------------------------------------
// Récupération du nom et du status admin ou non du user
// On retourn False si la requête est incorrecte
function db_select_club($db, $mail) {
    try {
        $query = $db->prepare('SELECT * 
                               FROM club
                               WHERE mail=:mail;');
        $query->bindParam(':mail', $mail, PDO::PARAM_STR);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_select_runners ------------------------------------------------------
//----------------------------------------------------------------------------
// Récupération de la liste des cyclistes d'un club
// On retourn False si la requête est incorrecte
function db_select_runners($db, $club='') {
    try {
        $query = $db->prepare('SELECT * 
                               FROM cycliste
                               WHERE club=:club;');
        $query->bindParam(':club', $club, PDO::PARAM_STR);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_select_runner -------------------------------------------------------
//----------------------------------------------------------------------------
// Récupération d'un cycliste
// On retourn False si la requête est incorrecte
function db_select_runner ($db, $mail='') {
    try {
        $query = $db->prepare('SELECT * 
                               FROM cycliste
                               WHERE mail=:mail;');
        $query->bindParam(':mail', $mail, PDO::PARAM_STR);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_modify_runner -------------------------------------------------------
//----------------------------------------------------------------------------
// On modifie le champ modifié
// On retourn False si la requête est incorrecte
function db_modify_runner ($db, $raw_mail='', $surname='', $name='', $num_licence='', $birthdate='', $validate='', $club='', $code='') {
    try {
      $query = $db->prepare("UPDATE cycliste 
                             SET nom=:nom, prenom=:prenom, num_licence=:num_licence, date_naissance=:date_naissance, valide=:valide, club=:club, code_insee=:code_insee
                             WHERE mail=:raw_mail;");
      $query->bindParam(':nom', $surname, PDO::PARAM_STR);
      $query->bindParam(':prenom', $name, PDO::PARAM_STR);
      $query->bindParam(':num_licence', $num_licence, PDO::PARAM_INT);
      $query->bindParam(':date_naissance', $birthdate, PDO::PARAM_STR);
      $query->bindParam(':valide', $validate, PDO::PARAM_INT);
      $query->bindParam(':club', $club, PDO::PARAM_STR);
      $query->bindParam(':code_insee', $code, PDO::PARAM_INT);
      $query->bindParam(':raw_mail', $raw_mail, PDO::PARAM_STR);
      $query->execute();
      return "";
  
    } catch (PDOExecption $exception) {
      error_log('Connection error: '.$exception->getMessage());
      return false;
    }
}

//----------------------------------------------------------------------------
//--- db_select_racing -------------------------------------------------------
//----------------------------------------------------------------------------
// Récupération de la liste des cyclistes d'un club
// On retourn False si la requête est incorrecte
function db_select_racing($db) {
    try {
        $query = $db->prepare('SELECT * 
                               FROM course;');
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_racing_runners_list -------------------------------------------------
//----------------------------------------------------------------------------
// Renvois si l'utilisateur existe
// On retourn False si la requête est incorrecte
function db_racing_all_runners($db, $idcourse) {
    try {
        $query = $db->prepare('SELECT c.nom,c.prenom, c.mail, co.id 
                               FROM cycliste c
                               JOIN participe p
                               JOIN course co
                               WHERE c.mail=p.mail
                               AND co.id=p.id
                               AND p.id=:id;;
                            ');
        $query->bindParam(':id', $idcourse, PDO::PARAM_INT);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_racing_club_runners -------------------------------------------------
//----------------------------------------------------------------------------
// Renvois si l'utilisateur existe
// On retourn False si la requête est incorrecte
function db_racing_club_runners($db, $club, $idcourse) {
    try {
        $query = $db->prepare('SELECT c.nom,c.prenom, c.mail, co.id 
                               FROM cycliste c
                               JOIN participe p
                               JOIN course co
                               WHERE c.mail=p.mail
                               AND co.id=p.id
                               AND p.id=:id
                               AND c.club=:club;
                            ');
        $query->bindParam(':club', $club, PDO::PARAM_STR);
        $query->bindParam(':id', $idcourse, PDO::PARAM_INT);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_post_racing_runner --------------------------------------------------
//----------------------------------------------------------------------------
// Insert un particpant dans la base de données
// On retourn False si la requête est incorrecte
function db_post_racing_runner($db, $mail, $id, $place, $dossart, $nb_points, $temps) {
    try {
        $query = $db->prepare('INSERT INTO participe (mail, id, place, dossart, point, temps)
                               VALUES (:mail,:id,:place,:dossart,:point,:temps);');
        $query->bindParam(':mail', $mail, PDO::PARAM_STR);
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $query->bindParam(':place', $place, PDO::PARAM_INT);
        $query->bindParam(':dossart', $dossart, PDO::PARAM_INT);
        $query->bindParam(':point', $nb_points, PDO::PARAM_INT);
        $query->bindParam(':temps', $temps, PDO::PARAM_STR);
        $query->execute();
        return "";
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

//----------------------------------------------------------------------------
//--- db_add_racing ----------------------------------------------------------
//----------------------------------------------------------------------------
// Ajoute une course
// On retourn False si la requête est incorrecte
function db_add_racing($db, $libelle, $date, $nb_tour, $distance, $nb_coureur, $longueur_tour, $club) {
    try {
        $query = $db->prepare("INSERT INTO course (libelle,date,nb_tour,distance,nb_coureur,longueur_tour,club)
                               VALUES (:libelle,:date,:nb_tour,:distance,:nb_coureur,:longueur_tour,:club);");
        $query->bindParam(':libelle', $libelle, PDO::PARAM_STR);
        $query->bindParam(':date', $date, PDO::PARAM_STR);
        $query->bindParam(':nb_tour', $nb_tour, PDO::PARAM_STR);
        $query->bindParam(':distance', $distance, PDO::PARAM_STR);
        $query->bindParam(':nb_coureur', $nb_coureur, PDO::PARAM_INT);
        $query->bindParam(':longueur_tour', $longueur_tour, PDO::PARAM_STR);
        $query->bindParam(':club', $club, PDO::PARAM_STR);
        $query->execute();
        return "";
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}

function db_getResult ($db) {
    try {
        $query = $db->prepare("SELECT * FROM participe");
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
}
?>