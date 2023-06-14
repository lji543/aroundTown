import { useContext } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { 
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore'

import { auth, db } from '../utils/firebase.config';
import { AppContext } from "./ContextProvider";

const useAuth = () => {
  const { authenticatedUserAppContext } = useContext(AppContext);
  // const owedItemsCollectionRef = collection(db, 'owedItems');
  const [authenticatedUser, setAuthenticatedUser] = authenticatedUserAppContext;

  const getAuthenticatedUser = () => {
    if (!authenticatedUser.refreshToken) {
      onAuthStateChanged(auth, (user) => {
        // console.log('user ',authenticatedUser)
        if (user) {
          console.log('getAuthenticatedUser ',user)
          // console.log('getAuthenticatedUser -logged in')
          setAuthenticatedUser({
            // email: user.email,
            // uid: user.uid,
            email: 'dlake901@gmail.com',
            uid: 'IkBG546lOVdqA5e3sh0GuMUyLjw1',
            checkedLogin: true, // using for loading state (TODO: use router instead?)
            // refreshToken: user.sTsTokenManager?.refreshToken,
          });
          // console.log('user ',authenticatedUser)
        } else {
          // User is signed out, will go to login page
          // console.log('getAuthenticatedUser - not signed in')
          // setAuthenticatedUser({
          //   checkedLogin: true,
          // });
          setAuthenticatedUser({ // TODO: temp until login page is setup
            email: 'dlake901@gmail.com',
            uid: 'IkBG546lOVdqA5e3sh0GuMUyLjw1',
            checkedLogin: true,
          });
        }
      })
    }
  }

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          // console.log('logInWithEmailAndPassword .then ',auth, email, password)
          // console.log('logInWithEmailAndPassword .then ',data)
          setAuthenticatedUser({
            email: data.user.email,
            refreshToken: data._tokenResponse.refreshToken
          });
        });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
    setAuthenticatedUser({
      email: '',
      checkedLogin: false, // using for loading state (TODO: use router instead?)
      refreshToken: '',
    });
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      // const res = await signInWithPopup(auth, googleProvider);
      // const user = res.user;
      // const q = query(collection(db, "users"), where("uid", "==", user.uid));
      // const docs = await getDocs(q);
      // if (docs.docs.length === 0) {
      //   await addDoc(collection(db, "users"), {
      //     uid: user.uid,
      //     name: user.displayName,
      //     authProvider: "google",
      //     email: user.email,
      //   });
      // }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return {
    authenticatedUser: authenticatedUser,
    getAuthenticatedUser,
    logInWithEmailAndPassword,
    logout,
    sendPasswordReset,
  }
};

export default useAuth;