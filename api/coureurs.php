<?php
 
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
$runners = false;

$mail = "mccall@serie.fr";
if ($requestRessource == 'runners') {
    $user = db_select_club($db, $mail);
    foreach ($user as $key => $value) {
        $runners = db_select_runners($db, $value['club']);
    } 
}

if ($requestRessource == 'runner') {
    if ($requestMethod == 'GET') {
        //var_dump($_POST);
        if (isset($_GET['mail'])) {
            $runners = db_select_runner($db, $_GET['mail']);
        } else {
            $runners = db_select_runner($db);
        }
    }
}
    // if ($requestMethod == 'PUT') {

    // }

if ($runners === false) {
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

echo json_encode($runners);
exit;
?>