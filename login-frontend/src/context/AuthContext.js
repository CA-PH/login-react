import { createContext, useState, useEffect, useContext } from 'react'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'

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
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => { 
        return signOut(auth)
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
        <AuthContext.Provider value ={{user, signUp, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}