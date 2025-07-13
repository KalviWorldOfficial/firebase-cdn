importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBajigKtf3UQpzxsEXJLLXSZN5EwUP_f3E",
  authDomain: "kalvi-world-official-kannan.firebaseapp.com",
  projectId: "kalvi-world-official-kannan",
  messagingSenderId: "697299520284",
  appId: "1:697299520284:web:c0d3529a809523678888d9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: '/logo.png'
  };
  self.registration.showNotification(title, options);
});
