import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAf5oNZsYyjrILn_c4nSPbhMYJhtFQx8DA",
  authDomain: "fir-for-react-study.firebaseapp.com",
  projectId: "fir-for-react-study",
  storageBucket: "fir-for-react-study.appspot.com",
  messagingSenderId: "787726142489",
  appId: "1:787726142489:web:a1b79bd16bcf46fb35ee88"
};

if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig)
}