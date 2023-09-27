// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnmtgvvxC5wtVB_Ep4E454ryGsxV4WUwM",
  authDomain: "linkedin-clone-972b6.firebaseapp.com",
  projectId: "linkedin-clone-972b6",
  storageBucket: "linkedin-clone-972b6.appspot.com",
  messagingSenderId: "761778156827",
  appId: "1:761778156827:web:e4fb3636c980fdf06d8fbe",
  measurementId: "G-GYLZP1V21E",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
