import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setemptyFields] = useState([]);
  const navigate = useNavigate();
  const { login, user } = UserAuth();
  
  console.log(user)
  if(user){
    navigate("/")
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!email){
      setemptyFields("email")
    }
    if(!password){
      setemptyFields("password")
    }
    if(emptyFields.length > 0){
      return setError("Please fill in all the fields", {emptyFields})
    }
    try {
      await login(email,password)
      setemptyFields([])
      setError('')
      navigate("/")
    } catch (error) {
      setError(error)
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
