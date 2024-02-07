import { useState } from "react";
import { useStaffsContext } from "../../hooks/useStaffsContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { dispatch } = useStaffsContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setemptyFields] = useState([]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const staff = { email, password };

    const response = await fetch("/api/staffs/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staff)
    });

    const json = await response.json();
    if (!response.ok) { 
      console.log("res not ok");
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
    <form className="login" onSubmit={handleLogin}>
      <h3>Login</h3>
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
      <button onClick={handleLogin}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default LoginForm;
