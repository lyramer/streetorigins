import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./env";

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => {
    this.auth.currentUser.updatePassword(password);
  };

  // *** Streets API ***

  FeatureList = () => this.db.ref("FeatureList");
}

export default Firebase;
