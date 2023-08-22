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
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { auth, db } from '../utils/firebase.config';
import { AppContext } from "./ContextProvider";

const useMap = () => {
  const { mapAppContext } = useContext(AppContext);
  // const owedItemsCollectionRef = collection(db, 'owedItems');
  const [map, setMap] = mapAppContext;

  const getMap = async () => {
    // try {
    //   const { Map } = await google.maps.importLibrary("maps");
    //   map = new Map(document.getElementById("map"), {
    //     center: { lat: -34.397, lng: 150.644 }, // TODO: attach lat/lng to user
    //     zoom: 8,
    //   });
    //   setMap(map);
    // } catch (err) {
    //   console.error(err);
    //   alert(err.message);
    // }
  };

  return {
    getMap,
    map
  }
};

export default useMap;