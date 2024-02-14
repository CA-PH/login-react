import { useState } from "react";
import { useStaffsContext } from "../../hooks/useStaffsContext";
import { useNavigate } from "react-router-dom";
import { useSignup } from '../../hooks/useSignup';

const SignupForm = () => {
  const { dispatch } = useStaffsContext();
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyFields, setemptyFields] = useState([]);
  const navigate = useNavigate();
  const { signup, error, isLoading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();
    signup(email, password, fullname, role)
  };

  return (
    <form className="signup" onSubmit={handleSignup}>
      <h3>Signup</h3>
      <label>Full Name: </label>
      <input
        type="text"
        onChange={(e) => setFullname(e.target.value)}
        value={fullname}
        className={emptyFields.includes("fullname") ? "error" : ""}
      />
      <label>Email: </label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={emptyFields.includes("email") ? "error" : ""}
      />
      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={emptyFields.includes("password") ? "error" : ""}
      />
      <label>Role: </label>
      <select 
        onChange={(e) => setRole(e.target.value)}
        value={role}
      >
        <option>Choose a Role</option>
        <option value={"Receptionist"}>Receptionist</option>
        <option value={"Reservation Staff"}>Reservation Staff</option>
        <option value={"General Manager"}>General Manager</option>
        <option value={"Manager"}>Manager</option>
        <option value={"Supervisor"}>Supervisor</option>
      </select>
      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignupForm;
