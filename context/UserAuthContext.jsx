import {createContext, useContext, useEffect,useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
}  from "firebase/auth";
import {auth,db} from '../firebase';
import {doc, setDoc} from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

const UserAuthContext = createContext();

export function UserAuthContextProvider({children}){

const [user,setUser] = useState("null");


    // function signUp(email,password){
    //     return createUserWithEmailAndPassword(auth,email,password);
    // }

    async function signUp (email, password){
        const {user} = await createUserWithEmailAndPassword (auth,email,password);

        await setDoc(doc(db,"users",user.id),{
            email:user.email,
            createdAt:new Date(),
        });


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

    // async function fetchUserData(uid) {
    //     const userRef = doc(db, "users", uid);
    //     const userDoc = await getDoc(userRef);
        
    //     if (userDoc.exists()) {
    //       return userDoc.data();
    //     } else {
    //       console.log("No such document!");
    //       return null;
    //     }
    //   }




    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged (auth,(currentUser) =>{
            setUser(currentUser);
        })

        return () => 
            unsubscribe ();
        
    },[] );


    return(
    <UserAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>
        {children}
        </UserAuthContext.Provider>
    );
}

export function useUserAuth(){
    return useContext(UserAuthContext);
}