import { StaffsContext } from '../context/StaffContext'
import { useContext } from 'react'

export const useStaffsContext = () => {
    const context = useContext(StaffsContext)

    if (!context) {
        throw Error('useStaffsContext must be used inside a StaffsContextProvider')
    }
    
    return context
}