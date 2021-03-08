import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../settings/fcbonfig";

const getToken = async () => {
  let token = sessionStorage.getItem("fbapollo-token");

  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
      console.error("Firebase initialization error raised", err.stack);
    }
  }

  if (!token) {
    const provider = new firebase.auth.GoogleAuthProvider();

    const fbres = await firebase.auth().signInWithPopup(provider);

    token = await fbres.user.getIdToken();
    sessionStorage.setItem("fbapollo-token", token);
  }

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      token = await user.getIdToken();
      sessionStorage.setItem("fbapollo-token", token);
      // ...
    } else {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      const fbres = await firebase.auth().getRedirectResult();

      token = await fbres.user.getIdToken();
      sessionStorage.setItem("fbapollo-token", token);
    }
  });

  return token;
};

export { getToken };
