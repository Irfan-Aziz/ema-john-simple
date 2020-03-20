import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { useState, createContext, useContext, useEffect } from "react";
import React from 'react'

firebase.initializeApp(firebaseConfig);
const AuthContext=createContext();
export const AuthContextProvider=(props)=>{
    const auth=Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth=()=>useContext(AuthContext);
const getUser=user=>{
    const {displayName,email,photoURL}=user;
   return {name:displayName,email,photo:photoURL};
}
const Auth=()=>{
    const [user,setUser]=useState(null)
    
const signInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
       const signedInUser=getUser(res.user);
       setUser(signedInUser);
        return res.user;
    })
    .catch(err=>{
        console.log(err);
        setUser(null);
        return err.message;
    })
}
const signOut=()=>{
    firebase.auth().signOut()
    .then(function(){
        setUser(null);
    }).catch(function(error){
        console.log(error);
    });
}
useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(usr){
        if(usr){
            const currentUser=getUser(usr);
            setUser(currentUser);
            //console.log(user);
        }else{

        }
    });
},[])
return{
   user,signInWithGoogle,signOut
}
}
export default Auth;