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
//--- select_runners ---------------------------------------------------------
//----------------------------------------------------------------------------
// Récupération de la liste des cyclistes d'un club
// On retourn False si la requête est incorrecte
function select_runners($db, $club) {
    try {
        $query = $db->prepare('SELECT * 
                               FROM cycliste
                               WHERE club=":club";');
        $query->bindParam(':club', $club, PDO::PARAM_STR);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
    return true;
}

//----------------------------------------------------------------------------
//--- select_runner ----------------------------------------------------------
//----------------------------------------------------------------------------
// Récupération d'un cycliste
// On retourn False si la requête est incorrecte
function select_runner ($db, $mail) {
    try {
        $query = $db->prepare('SELECT * 
                               FROM cycliste
                               WHERE mail=":mail";');
        $query->bindParam(':mail', $mail, PDO::PARAM_STR);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
    return true;
}

//----------------------------------------------------------------------------
//--- modify_runner ----------------------------------------------------------
//----------------------------------------------------------------------------
// On modifie le champ modifié
// On retourn False si la requête est incorrecte
function modify_runner ($db, $row_mail, $mail, $surname, $name, $num_licence, $birthdate, $validate, $club, $code) {
    try {
      $query = $db->prepare("UPDATE cycliste 
                             SET mail=':mail', nom=':nom', prenom=':prenom', num_licence=':num_licence', date_naissance=':date_naissance', valide=':valide', club=':club', code_insee=':code_insee'
                             WHERE mail=':row_mail';");
      $query->bindParam(':mail', $mail, PDO::PARAM_STR);
      $query->bindParam(':nom', $surname, PDO::PARAM_STR);
      $query->bindParam(':prenom', $name, PDO::PARAM_STR);
      $query->bindParam(':num_licence', $num_licence, PDO::PARAM_STR);
      $query->bindParam(':date_naissance', $birthdate, PDO::PARAM_STR);
      $query->bindParam(':valide', $validate, PDO::PARAM_STR);
      $query->bindParam(':club', $club, PDO::PARAM_STR);
      $query->bindParam(':code_insee', $code, PDO::PARAM_STR);
      $query->bindParam(':row_mail', $row_mail, PDO::PARAM_STR);
      $query->execute();
      echo '<div class="alert alert-success" role="alert">
                Modification effectuée. Vous pouvez rafraichir la page.
            </div>';
      return true;
  
    } catch (PDOExecption $exception) {
      error_log('Connection error: '.$exception->getMessage());
      return false;
    }
}

//----------------------------------------------------------------------------
//--- select_runners ---------------------------------------------------------
//----------------------------------------------------------------------------
// Récupération de la liste des cyclistes d'un club
// On retourn False si la requête est incorrecte
function select_racing($db) {
    try {
        $query = $db->prepare('SELECT * 
                               FROM course
                               WHERE club=":club";');
        $query->bindParam(':club', $club, PDO::PARAM_STR);
        $query->execute();
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception) {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
    return true;
}
?>