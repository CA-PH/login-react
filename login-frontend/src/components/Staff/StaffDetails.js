import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'

const StaffDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/staff/' + staff._id,{
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_STAFF', payload: json})
        }
    }

    return (
        <div className="staff-dashboard">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}> Delete </span>
        </div>
    )
}

export default StaffDetails
