<?php
$ville = (isset($_GET['ville']) ? $_GET['ville'] : null);

$curl = curl_init("https://api.openweathermap.org/data/2.5/weather?q=".$ville."&units=metric&appid=a0c49045e8c6555113d2c23c6439c2e2");

$data = curl_exec($curl);

curl_close($curl);

json_encode($curl);
