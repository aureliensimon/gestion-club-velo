<?php
 
require ('database.php');

$db = dbConnect();
if (!$db) { 
    header ('HTTP/1.1 503 Service Unvailable');
    exit;
}

$mail = "mccall@serie.fr";
$user = db_select_club($db, $mail);
foreach ($user as $key => $value) {
    $runners = db_select_runners($db, $value['club']);
} 

echo json_encode($runners);
exit;
?>