import { createContext } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
export const AuthContext=createContext(null)
const Authprovider = ({children}) => {



const createUser=(email,password)=>{
  return  createUserWithEmailAndPassword(auth,email,password)
}



const authValues={createUser};

    return (
        <AuthContext.Provider value={authValues} >
           {children}
        </AuthContext.Provider>
       
    );
};

export default Authprovider;