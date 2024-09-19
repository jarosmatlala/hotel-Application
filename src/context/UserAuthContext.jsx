import {createContext, useContext, useEffect,useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
}  from "firebase/auth";
import {auth} from '../firebase';
// import { GoogleAuthProvider } from "firebase/auth/web-extension";


const UserAuthContext = createContext();

export function UserAuthContextProvider({children}){

const [user,setUser] = useState("null");


    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logOut() {
        return signOut (auth);
    }

    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }

function resetPassword(email){
    return sendPasswordResetEmail(auth,email);
}



    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged (auth,(currentUser) =>{
            setUser(currentUser);
        })

        return () => 
            unsubscribe ();
        
    },[] );


    return(
    <UserAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn,resetPassword}}>
        {children}
        </UserAuthContext.Provider>
    );
}

export function useUserAuth(){
    return useContext(UserAuthContext);
}