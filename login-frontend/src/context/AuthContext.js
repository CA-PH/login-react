import { createContext, useState, useEffect, useContext } from 'react'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, collection, setDoc } from "firebase/firestore"; 

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default: 
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [ user, setUser ] = useState({})

    const signUp = (email, password, fullname, role) => {
        if(email && password && fullname && role){
        const firebaseSign = createUserWithEmailAndPassword(auth, email, password).then(cred => {
            const myCollection = collection(db, 'users');
            const myDocumentData = {
            fullname: fullname,
            role: role,
            };

            // Define the document reference
            const myDocRef = doc(myCollection, cred.user.uid);

            // Add or update the document
            setDoc(myDocRef, myDocumentData)
            .then(() => {
                console.log("Document has been added successfully");
            })
            .catch(error => {
                console.log(error);
            });
        })
        
        return firebaseSign;
    }
        else{
            return Error("Please fill in all the details")
        }
        }

    
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => { 
        return signOut(auth)
    }

    const forgotPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return(
        <AuthContext.Provider value ={{user, signUp, login, logout, forgotPass}}>
            { children }
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}