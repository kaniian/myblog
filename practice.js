
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs9a1yiGDlr9oTDoGgYIjtzHHVbPHzB7Y",
  authDomain: "chatapp-9be2c.firebaseapp.com",
  databaseURL: "https://chatapp-9be2c-default-rtdb.firebaseio.com",
  projectId: "chatapp-9be2c",
  storageBucket: "chatapp-9be2c.appspot.com",
  messagingSenderId: "68204524280",
  appId: "1:68204524280:web:ea8f63de13944d9e09410d",
  measurementId: "G-V2YTZRS1QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


