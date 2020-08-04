import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCvsPBvbIDnsEVIe9n2Nds-DdJAiWVDdJ4",
    authDomain: "connectfour-c74c9.firebaseapp.com",
    databaseURL: "https://connectfour-c74c9.firebaseio.com",
    projectId: "connectfour-c74c9",
    storageBucket: "connectfour-c74c9.appspot.com",
    messagingSenderId: "329922873132",
    appId: "1:329922873132:web:fb1f0ce6832e4833644e89",
    measurementId: "G-8TYHWYS5L2"
};
const fire = firebase.initializeApp(config);
export default fire;