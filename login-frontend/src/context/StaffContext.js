import { createContext, useReducer } from 'react'

export const StaffsContext = createContext()

export const staffsReducer = (state, action) => {
    switch (action.type){
        case 'SET_STAFF':
            return {
                staffs: action.payload
            }
        case 'CREATE_STAFF':
            return {
                staffs: [action.payload, ...state.staffs]
            }
        case 'DELETE_STAFF':
            return {
                staffs: state.staffs.filter((x) => x._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const StaffsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(staffsReducer, {
        staffs: null
    })

    return (
        <StaffsContext.Provider data-testid="home-1" value={{...state, dispatch}}>
            { children }
        </StaffsContext.Provider>
    )
}