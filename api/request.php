<?php
@session_start();

require ('database.php');

$requestMethod = $_SERVER['REQUEST_METHOD']; //get
$request = substr($_SERVER['PATH_INFO'], 1); //array
$request = explode('/', $request);
$requestRessource = array_shift($request); //string contenant photos

$db = dbConnect();
if (!$db) {
  header ('HTTP/1.1 503 Service Unavailable');
  exit;
}

$id = array_shift($request); 
if ($id == '') $id = NULL;
$data = false;

$mail = $_SESSION['user_mail'];
if ($requestRessource == 'runners') {
    $user = db_select_club($db, $mail);
    foreach ($user as $key => $value) {
        $data = db_select_runners($db, $value['club']);
        if (isset($_GET['idcourse'])) {
            $data = db_racing_runners($db, $value['club'], $_GET['idcourse']);
        }
    } 
}

if ($requestRessource == 'runner') {
    if ($requestMethod == 'GET') {
        if (isset($_GET['mail'])) {
            $data = db_select_runner($db, $_GET['mail']);
        } else {
            $data = db_select_runner($db);
        }
    }
    if ($requestMethod == 'PUT') {
        parse_str(file_get_contents('php://input'), $_PUT);
        if ($id !=NULL) {
            $data = db_modify_runner ($db, $id, $_PUT['nom'], $_PUT['prenom'], $_PUT['num_licence'], $_PUT['date_naissance'], $_PUT['valide'], $_PUT['club'], $_PUT['code_insee']);
        } else {
            $data = db_modify_runner($db);
        }
    }
}

if ($requestRessource == 'racing') {
    if ($requestMethod == 'GET') {
        $data = db_select_racing($db);
    }
    /*if ($requestMethod == 'PUT') {
        parse_str(file_get_contents('php://input'), $_PUT);
        if ($id != NULL) {

        } else {

        }
    }*/
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