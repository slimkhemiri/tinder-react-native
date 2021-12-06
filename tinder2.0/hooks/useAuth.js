import React, { createContext, useContext,useState } from "react";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
//  import {auth} from "../firebase"

const AuthContext = createContext({});

const config = {
  androidClientId:
    "7157327839-1p79fv638ldfm421vq965aifnnh7sc0r.apps.googleusercontent.com",
  iosClientId:
    "7157327839-ciof5vf7b8a2k4jf2qthhpoj9ct7qe4u.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
    const [error,setError] = useState(null)
  const signInWithGoogle = async () => {
    await Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === "success") {
        const { idToken, accessToken } = logInResult;
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        await signInWithCredential(auth, credential);
      }
      return Promise.reject();
    }).catch(error=> setError(error))
 
  };
  return (
    <AuthContext.Provider
      value={{
        user: "slim",
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
