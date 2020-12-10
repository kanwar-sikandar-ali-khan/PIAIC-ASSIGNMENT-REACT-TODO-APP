import  firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCot4ngwzfyCFTIPt491XeSCNCJegiF8oU",
    authDomain: "to--do-app.firebaseapp.com",
    databaseURL: "https://to--do-app.firebaseio.com",
    projectId: "to--do-app",
    storageBucket: "to--do-app.appspot.com",
    messagingSenderId: "208649660753",
    appId: "1:208649660753:web:17b3e79c8cdca031e68b70",
    measurementId: "G-TYD528B70C"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);