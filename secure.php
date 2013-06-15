<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <title>Perfect Login - Secure Page</title>

    <link rel="stylesheet" type="text/css" href="login.css">

</head>

<body>


<?php

define('USER', 'user');
define('PASSWORD', 'pass');

if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {

    header('WWW-Authenticate: Basic realm="PLogin"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'You hit cancel.'; // Redirect from here

} elseif ( isset($_SERVER['PHP_AUTH_USER']) && $_SERVER['PHP_AUTH_USER'] != USER ||
           isset($_SERVER['PHP_AUTH_PW']) && $_SERVER['PHP_AUTH_PW'] != PASSWORD ) {

    header('HTTP/1.0 400 Bad Request');
    echo "<p>Unauthorized!</p>"; // Redirect from here

} else {

    echo '<p>Hello ' . $_SERVER['PHP_AUTH_USER'] . '! Welcome to the secure area</p>';
    echo '<a href="javascript:pLogin.logout()">Logout</a>';

}
?>



<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script type="text/javascript" defer src="login.js"></script>

</body>
</html>