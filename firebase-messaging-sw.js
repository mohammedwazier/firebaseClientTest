importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-messaging.js');
/*Update this config*/
var config = {
    apiKey: "AAAA6D-_FH8:APA91bFatXYNaf0O_vq4KhC02YxPKrKd0G7WdvKnlhwQZgDh-JSD1pr2R7qlPdVebUMuk-E2TS32OeX6MYTOzIcrBtBx5oBk6xs7htjBwdMSbmdE61B2DNYwJoFeAxQJ6un0HynEzEm4",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-997501899903",
    messagingSenderId: "1073052576756"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
	icon: 'http://localhost/gcm-push/img/icon.png',
	image: 'http://localhost/gcm-push/img/d.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]