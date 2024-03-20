import {useEffect} from 'react'

import { useStaffsContext } from '../hooks/useStaffsContext'
import StaffDetails from '../components/StaffDetails'
import StaffForm from '../components/StaffForm'

const Home = () => {
    const {staffs, dispatch} = useStaffsContext()

    useEffect(() => {
        const fetchStaffs = async () => {
            const response = await fetch('/api/staffs')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_STAFFS', payload: json})
            }
        }
        fetchStaffs()
    }, [])
    return (
        <div className="home" data-testid="home">
            <div className='staffs'>
                {staffs && staffs.map((staff) => (
                    <StaffDetails key={staff._id} staff={staff}/>
                ))}
            </div>
            <StaffForm />
        </div>
    )
}

export default Home