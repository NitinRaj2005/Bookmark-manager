import { initializeApp, getApps, getApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signOut } from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const isFirebaseConfigured = Object.values(firebaseConfig).every(
  (value) => typeof value === "string" && value.trim() !== ""
);

let app = null;
let database = null;
let auth = null;
let provider = null;
let booksCollection = null;

if (isFirebaseConfigured) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  database = getFirestore(app);
  auth = getAuth(app);
  provider = new GoogleAuthProvider().setCustomParameters({
    prompt: "select_account",
  });
  booksCollection = collection(database, "books");
}

export { app, database, auth, provider, booksCollection, isFirebaseConfigured };

// add data to firebase
export const addDataToFirebase = async (id, library, shelf) => {
  if (!database || !booksCollection || !id) return;

  const currentDoc = doc(database, "books", `${id}`);
  await setDoc(
    currentDoc,
    { id, library: [...library], shelf: { ...shelf } },
    { merge: true }
  );
};

// sign user out and remove data from local storage
export const signUserOut = async () => {
  if (!auth) {
    localStorage.removeItem("user");
    localStorage.removeItem("userData");
    return;
  }

  await signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("userData");
    })
    .catch((error) => toast.error(error?.message || error, { autoClose: 5000 }));
};
