import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../Firebase/Firebase.config";
  
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const CreateUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    const SignOutUser = () => {
      setLoading(true);
      return signOut(auth)
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (createUser) => {
        setUser(createUser);
        setLoading(false);
        console.log(createUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
    const AuthInfo = { user, loading, CreateUser, signInUser, SignOutUser };
    return (
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;