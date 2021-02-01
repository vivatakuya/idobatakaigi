import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdhCf7E2yThM6KPsD1dCpUKaEVNvaMDBI",
  authDomain: "idobatakaigi-with-ham-7a0d5.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-7a0d5",
  storageBucket: "idobatakaigi-with-ham-7a0d5.appspot.com",
  messagingSenderId: "996490192673",
  appId: "1:996490192673:web:914e2c7c2295ae5d828060",
};

firebase.initializeApp(firebaseConfig);

const datebase = firebase.database();
const messageRef = datebase.ref("messages");

export const PushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
