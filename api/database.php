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
//--- db_auth_user -------------------------------------------------------
//----------------------------------------------------------------------------
// Renvois si l'utilisateur existe
function db_auth_user($db, $mail, $pwd) {
    try {
        $query = $db->prepare('SELECT * 
                               FROM user
                               WHERE mail=:mail AND password=:password;
                            ');
        $query->bindParam(':mail', $mail, PDO::PARAM_STR);
        $query->bindParam(':password', $pwd, PDO::PARAM_STR);
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