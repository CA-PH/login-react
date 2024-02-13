import { useState } from "react";
import { useStaffsContext } from "../../hooks/useStaffsContext";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const { dispatch } = useStaffsContext();
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setemptyFields] = useState([]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const staff = { email, password };

    const response = await fetch("/api/staffs/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staff)
    });

    const json = await response.json();
    if (!response.ok) { 
      setError(json.error);
    }
    if (response.ok) {
      setEmail("");
      setPassword("");
      setError(null);
      setemptyFields([]);
      navigate("/");
      // dispatch({type: 'CREATE_STAFFS', payload: json})
    }
  };

  return (
    <form className="signup" onSubmit={handleLogin}>
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
      <select>
        <option value={"Receptionist"}>Receptionist</option>
        <option value={"Reservation Staff"}>Reservation Staff</option>
        <option value={"General Manager"}>General Manager</option>
        <option value={"Manager"}>Manager</option>
        <option value={"Supervisor"}>Supervisor</option>
      </select>
      <button onClick={handleSignup}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignupForm;
