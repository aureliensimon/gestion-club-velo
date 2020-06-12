<?php
require ('database.php');

$requestMethod = $_SERVER['REQUEST_METHOD']; //get
$request = substr($_SERVER['PATH_INFO'], 1); //array
$request = explode('/', $request);
$requestRessource = array_shift($request); //string contenant photos
$login = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];

$db = dbConnect();
if (!$db) {
  header ('HTTP/1.1 503 Service Unavailable');
  exit;
}

$id = array_shift($request); 
if ($id == '') $id = NULL;
$data = false;

if ($requestRessource == 'user') {
    $data = db_auth_user($db,$login);
}

if ($requestRessource == 'runners') {
    $user = db_select_club($db, $login);
    foreach ($user as $key => $value) {
        $data = db_select_runners($db, $value['club']);
        if (isset($_GET['idcourse'])) {
            if ($_GET['club_course'] == $value['club']) {
                $data = db_racing_all_runners($db, $_GET['idcourse']);
            } else {
                $data = db_racing_club_runners($db, $value['club'], $_GET['idcourse']);
            }
        }
    } 
}

if ($requestRessource == 'runner') {
    if ($requestMethod == 'GET') {
        if (isset($_GET['mail'])) {
            $data = db_select_runner($db, $_GET['mail']);
        } else {
            $data = "";
        }
    }
    if ($requestMethod == 'PUT') {
        parse_str(file_get_contents('php://input'), $_PUT);
        if ($id !=NULL) {
            $data = db_modify_runner ($db, $id, $_PUT['nom'], $_PUT['prenom'], $_PUT['num_licence'], $_PUT['date_naissance'], $_PUT['valide'], $_PUT['club'], $_PUT['code_insee']);
        } else {
            $data = "";
        }
    }
}

if ($requestRessource == 'racing') {
    if ($requestMethod == 'GET') {
        $data = db_select_racing($db);
    }
    if ($requestMethod == 'POST') {
        $data = db_select_runner($db, $_POST['mail']);
        if (isset($_POST['id']) && $data[0]['valide'] == 1) {
            $data = db_post_racing_runner($db, $_POST['mail'], $_POST['id'], $_POST['place'], $_POST['dossart'], $_POST['nb_points'], $_POST['temps']);
        } else {
            $data="";
        }
    }
}

if ($requestRessource == 'add_racing') {
    if ($requestMethod == 'POST') {
        $data = db_add_racing($db, $_POST['libelle'], $_POST['date'], $_POST['nb_tour'], $_POST['distance'], $_POST['nb_coureurs'], $_POST['longueur_tour'], $_POST['club']);
    } else {
        $data="";
    }
}

if ($requestRessource == 'getResult') {
    if ($requestMethod == 'GET') {
        $data = db_getResult($db, $_GET['course']);
    } else {
        $data="";
    }
}

if ($requestMethod == 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    exit();
}

if ($data === false) {
    header('HTTP/1.1 400 Bad Request');
    exit();
}
  
header('Content-Type: application/json');
header('Cache-control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
if ($requestMethod == 'POST') {
    header('HTTP/1.1 201 Created');
} else {
    header('HTTP/1.1 200 OK');
}

echo json_encode($data);
exit;
?>