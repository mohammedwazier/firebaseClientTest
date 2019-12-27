// Initialize Firebase
  /*Update this config*/
  var config = {
    apiKey: "AAAA6D-_FH8:APA91bFatXYNaf0O_vq4KhC02YxPKrKd0G7WdvKnlhwQZgDh-JSD1pr2R7qlPdVebUMuk-E2TS32OeX6MYTOzIcrBtBx5oBk6xs7htjBwdMSbmdE61B2DNYwJoFeAxQJ6un0HynEzEm4",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-997501899903",
    messagingSenderId: "1073052576756"
  };
  firebase.initializeApp(config);
    // Retrieve Firebase Messaging object.
   const messaging = firebase.messaging();
   messaging.requestPermission()
   .then(function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // if(isTokenSentToServer()) {
      // console.log('Token already saved.');
      // } else {
      getRegToken();
      // }
   })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });

    messaging.onTokenRefresh(() => {
      messaging.getToken().then((refreshedToken) => {
        console.log('Token refreshed.');
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        setTokenSentToServer(false, refreshedToken);
        // Send Instance ID token to app server.
        // sendTokenToServer(refreshedToken);
        // [START_EXCLUDE]
        // Display new Instance ID token and clear UI of all previous messages.
        resetUI();
        // [END_EXCLUDE]
      }).catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
        showToken('Unable to retrieve refreshed token ', err);
      });
    });

    function getRegToken(argument) {
        messaging.getToken()
          .then(function(currentToken) {
            if (currentToken) {
              saveToken(currentToken);
              console.log('current token', currentToken);
              setTokenSentToServer(true, currentToken);
            } else {
              console.log('No Instance ID token available. Request permission to generate one.');
              setTokenSentToServer(false, currentToken);
            }
          })
          .catch(function(err) {
            console.log('An error occurred while retrieving token. ', err);
            setTokenSentToServer(false, '');
          });
    }

    function setTokenSentToServer(sent, token) {
        window.localStorage.setItem('sentToServer', sent ? 1 : 0);
        window.localStorage.setItem('token', token);
    }

    function isTokenSentToServer() {
        return window.localStorage.getItem('sentToServer') == 1;
    }

    function saveToken(currentToken) {
        console.log('Token : '+currentToken);
        // $.ajax({
        //  url: 'action.php',
        //  method: 'post',
        //  data: 'token=' + currentToken
        // }).done(function(result){
        //  console.log(result);
        // })
    }

    messaging.onMessage(function(payload) {
      console.log("Message received. ", payload);
      // notificationTitle = payload.data.title;
      // notificationOptions = {
      //    body: payload.data.body,
      //    icon: payload.data.icon,
      //    image:  payload.data.image
      // };
      // var notification = new Notification(notificationTitle,notificationOptions);
    });

$(document).ready(function(){
  $('.login').click(function(){
    $.ajax({
      method:'post',
      url:'fcm-push/subscribe.php',
      data: 'token=' + window.localStorage.getItem('token'),
      success: function(data){
        console.log(data);
      }
    })
  })
})