import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContexts=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
      const  unSubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
        });

        return ()=>{
            return unSubscribe();
        }
    },[])

    

    const authInfo={
        user,
        loading,
        createUser,
    }
    return (
        <AuthContexts.Provider value={authInfo}>
            {
                children
            }
        </AuthContexts.Provider>
    );
};

export default AuthProvider;