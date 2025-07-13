// sw
// eslint-disable-next-line no-undef
importScripts('https://platformio-resources.s3.amazonaws.com/js/firebase-messaging-sw-remote.js');

// Import scripts required for Firebase Messaging
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBajigKtf3UQpzxsEXJLLXSZN5EwUP_f3E",
  authDomain: "kalvi-world-official-kannan.firebaseapp.com",
  projectId: "kalvi-world-official-kannan",
  messagingSenderId: "697299520284",
  appId: "1:697299520284:web:c0d3529a809523678888d9"
});

// Retrieve messaging instance
const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // Optional: Replace with your logo path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

