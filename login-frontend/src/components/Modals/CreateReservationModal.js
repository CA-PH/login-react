import { useState } from 'react'
import './ReservationModal.css'

export default function CreateReservationModal ({user}) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
        <button onClick={toggleModal} className='btn-modal'>Create Reservation</button>
        {modal && (
            <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <h2>Create a Reservation for {user.fullname}</h2>
                <label>Reservation Time: </label>
                <input type='text' placeholder=''></input>
                <label>Order/s: </label>
                <input type='text' placeholder=''></input>
                <label>Occasion: </label>
                <input type='text' placeholder=''></input>
            <button className='btn-modal' onClick={toggleModal}>Close</button>
            </div>
            </div>        
        )}
        </>


    )
}