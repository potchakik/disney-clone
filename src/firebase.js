//// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore";
//// TODO: Add SDKs for Firebase products that you want to use
//// https://firebase.google.com/docs/web/setup#available-libraries

//// Your web app's Firebase configuration
//// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//  apiKey: "AIzaSyAxq4Wp3u9j8cK43cGlVETEl03DD3s-Bms",
//  authDomain: "disney-clone-fd0a8.firebaseapp.com",
//  projectId: "disney-clone-fd0a8",
//  storageBucket: "disney-clone-fd0a8.appspot.com",
//  messagingSenderId: "1005289641945",
//  appId: "1:1005289641945:web:005a6b7ab2fef93a57ebc8",
//  measurementId: "G-Y3NS818DF2",
//};

//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const db = getFirestore();

//export { app, analytics, db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // firebaseconfig keys
  apiKey: "AIzaSyDdvbpBGMPfkpQmMpdd2m7HEhwOM-pyeU4",
  authDomain: "disneyplus-clone-d8672.firebaseapp.com",
  projectId: "disneyplus-clone-d8672",
  storageBucket: "disneyplus-clone-d8672.appspot.com",
  messagingSenderId: "58351980408",
  appId: "1:58351980408:web:f7de3121dd10e7d0adc28d",
  measurementId: "G-3C45DXY5ED",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
