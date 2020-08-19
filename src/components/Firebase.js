import firebase from 'firebase';

const firebaseconfig = firebase.initializeApp({
    {
        apiKey: "AIzaSyBMB-4k8uWPU8ovYtJ8QOlaq2gpMs6rLb8",
        authDomain: "seraph-986ac.firebaseapp.com",
        databaseURL: "https://seraph-986ac.firebaseio.com",
        projectId: "seraph-986ac",
        storageBucket: "seraph-986ac.appspot.com",
        messagingSenderId: "244101129535",
        appId: "1:244101129535:web:59df1d16a859c691b9df8a",
        measurementId: "G-DWQPYMKQJB"
     
      
      
})
const db = firebaseconfig.firestore();
const auth = firebaseconfig.auth();
const storage = firebaseconfig.storage();

export {db , auth ,  storage}
firebase.analytics();