import { useUsersContext } from '../../hooks/useUsersContext'
// import { useState } from 'react'
import CreateReservationModal from '../Modals/CreateReservationModal'
import ViewReservationModal from '../Modals/ViewReservationModal'

const UserDetails = ({ user }) => {
    const { dispatch } = useUsersContext()

    const handleDelete = async () => {
        const response = await fetch('/api/users/' + user._id,{
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_USER', payload: json})
        }
    }
    // const handleEdit = async () => {
    //     const response = await fetch('/api/users/' + user._id,{
    //         method: 'UPDATE'
    //     })
    //     const json = await response.json()

    //     if(response.ok){
    //         dispatch({type: 'UPDATE_USER', payload: json})
    //     }
    // }
    // const handleReservation = async () => {
    //     const response = await fetch('/api/users/' + user._id,{
    //         method: 'DELETE'
    //     })
    //     const json = await response.json()

    //     if(response.ok){
    //         dispatch({type: 'DELETE_USER', payload: json})
    //     }
    // }
    return (
        <div className="users-management">
            <h4>{user.fullname}</h4>
            <p><strong>Contact Number: </strong>{user.contact}</p>
            <p><strong>Address: </strong>{user.address}</p>
            <CreateReservationModal key={user._id} user={user}/>
            <ViewReservationModal key={user._id} user={user}/>
            <span onClick={handleDelete}> Delete </span>
            {/* <span onClick={handleEdit}> Edit </span> */}
        </div>
    )
}

export default UserDetails
