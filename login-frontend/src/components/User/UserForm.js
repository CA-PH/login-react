import { useState } from "react"
import { useUsersContext } from "../../hooks/useUsersContext"

const UserForm = () => {
    const {dispatch} = useUsersContext()


    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setemptyFields] = useState([])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {fullname, address, contact}

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{ 
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if (!response.ok){
            setError(json.error)
            setemptyFields(json.emptyFields)
        }
        if (response.ok){
            setFullname('')
            setAddress('')
            setContact('')
            setError(null)
            setemptyFields([])
            dispatch({type: 'CREATE_USER', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>
                Add New User:
            </h3>
            <label>Full Name: </label>
            <input 
                type="text" 
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                className={emptyFields.includes('fullname') ? 'error' : ''}
            />
            <label>Address: </label>
            <input 
                type="text" 
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={emptyFields.includes('address') ? 'error' : ''}
            />
            <label>Contact Number: </label>
            <input 
                type="number" 
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                className={emptyFields.includes('contact') ? 'error' : ''}
            />
            <button>Create</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default UserForm