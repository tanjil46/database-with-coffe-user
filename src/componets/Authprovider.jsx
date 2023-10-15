import { createContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
export const AuthContext=createContext(null)
const Authprovider = ({children}) => {



const createUser=(email,password)=>{
  return  createUserWithEmailAndPassword(auth,email,password)
};
const userSingIn=(email,password)=>{
 return signInWithEmailAndPassword(auth,email,password)
}





const authValues={createUser,userSingIn};

    return (
        <AuthContext.Provider value={authValues} >
           {children}
        </AuthContext.Provider>
       
    );
};

export default Authprovider;