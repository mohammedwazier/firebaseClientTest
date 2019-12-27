<?php
define('SERVER_API_KEY', 'AAAA-dbq6_Q:APA91bEIKW996FW7XVDwbkOScc64SY4wGCENf-a9pUxVhWKOjHlbvA10O2KudqmcHHO3e4IK9bXvByf0Y4yI1ca4ZGGZJ2tIHLMZoLIB9Q29sL1hbIwyD8Q83S-mkqVT6UczeW8F4M9Y');
$header = [
    'Authorization: Key=' . SERVER_API_KEY,
    'Content-Type: Application/json'
];

if(!$_POST['token']){
    return json_encode(array('state' => false, 'message' => 'token invalid'));
}

$url = 'https://iid.googleapis.com/iid/v1/'.$_POST['token'].'/rel/topics/all';

return print_R($url);

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  // CURLOPT_POSTFIELDS => json_encode( $payload ),
  CURLOPT_HTTPHEADER => $header
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

return print_r($response);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

?>