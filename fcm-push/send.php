<?php
	define('SERVER_API_KEY', 'AAAA-dbq6_Q:APA91bEIKW996FW7XVDwbkOScc64SY4wGCENf-a9pUxVhWKOjHlbvA10O2KudqmcHHO3e4IK9bXvByf0Y4yI1ca4ZGGZJ2tIHLMZoLIB9Q29sL1hbIwyD8Q83S-mkqVT6UczeW8F4M9Y');

	// require 'DbConnect.php';
	// $db = new DbConnect;
	// $conn = $db->connect();
	// $stmt = $conn->prepare('SELECT * FROM tokens');
	// $stmt->execute();
	// $tokens = $stmt->fetchAll(PDO::FETCH_ASSOC);

	// foreach ($tokens as $token) {
		// $registrationIds[] = $token['token'];
	$registrationIds[] = 'dmSYmKuZkaw:APA91bFyTcaIEa1nbCKSMRCawhpfCLAb8avopAHxHXtLB4YzPxWCMeuB4f9U2l5GSMXT3aYdYYj3QOa-8JBNrhpQpkh6Y-VPwC6jHTwpvKorB0LWk9ns3dMIJt2BCUlKK1OlpQYHB-IX';
	// }

	// $tokens = ['cCLA1_8Inic:APA91bGhuCksjWEETYWVOh04scsZInxdWmXekEr5F9-1zJuTDZDw3It_tNmpA__PmoxDTISZzplD_ciXvsuw2pMtYSzdfIUAUfcTLnghvJS0CVkYW9sVx2HnF1rqnxsFgSdYmcXpHKLs'];

	$header = [
		'Authorization: Key=' . SERVER_API_KEY,
		'Content-Type: Application/json'
	];

	$msg = [
		'title' => 'Testing Notification',
		'body' => 'Testing Notification from localhost',
		'icon' => 'img/icon.png',
		'image' => 'img/d.png',
	];

	$payload = [
		'registration_ids' 	=> $registrationIds,
		'data'				=> $msg
	];

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => "https://fcm.googleapis.com/fcm/send",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS => json_encode( $payload ),
	  CURLOPT_HTTPHEADER => $header
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
	  echo "cURL Error #:" . $err;
	} else {
	  echo $response;
	}
 ?>