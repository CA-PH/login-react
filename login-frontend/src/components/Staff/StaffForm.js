import { useState } from "react"

const StaffForm = () => {

    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setemptyFields] = useState([])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const signup = {email, fullname, role, password}

        const response = await fetch('/api/staff', {
            method: 'POST',
            body: JSON.stringify(signup),
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
            setEmail('')
            setFullname('')
            setRole('')
            setPassword('')
            setError(null)
            setemptyFields([])
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>
                Sign Up
            </h3>
            <label>Full Name: </label>
            <input 
                type="text" 
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                className={emptyFields.includes('fullname') ? 'error' : ''}
            />
            <label>Email: </label>
            <input 
                type="text" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={emptyFields.includes('email') ? 'error' : ''}
            />
            <label>Password: </label>
            <input 
                type="text" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={emptyFields.includes('password') ? 'error' : ''}
            />
            <label>Role: </label>
            {/* <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            /> */}
            <select 
                name="role" 
                id="role" 
                onChange={(e) => setRole(e.target.value)
                }>
                <option value={"Receptionist"}>Receptionist</option>
                <option value={"Reservation Staff"}>Reservation Staff</option>
                <option value={"General Manager"}>General Manager</option>
                <option value={"Manager"}>Manager</option>
                <option value={"Supervisor"}>Supervisor</option>
            </select>
            <button>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default StaffForm