

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyAjJAspJNl-kxPclg-uzNvtdQ5JKAU_z00",
    authDomain: "monzo-verify-info.firebaseapp.com",
    projectId: "monzo-verify-info",
    storageBucket: "monzo-verify-info.appspot.com",
    messagingSenderId: "1074510949109",
    appId: "1:1074510949109:web:9af3dc624eadc05d3af3bc",
    measurementId: "G-H3QHPS86DE"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);