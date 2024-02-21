import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setemptyFields] = useState([]);
  const navigate = useNavigate();
  const { login, user } = UserAuth();
  const { formValid, setFormValid } = useState(0);

  if(user){
    navigate("/")
  }

  // useEffect(() => {
  //   if(formValid==1){
  //     firebaseLog()
  //   }
  //   else{
  //     setError('Please fill in all fields')
  //   }
  // },[formValid, emptyFields])

  const handleLogin = async (e) => {
    e.preventDefault();
    setemptyFields([]);
    setError('')

    if(!email){
      setemptyFields((oldVal) => [...oldVal, "email"])
      setError('Please fill in all fields')
    }
    if(!password){
      setemptyFields((oldVal) => [...oldVal, "password"])
      setError('Please fill in all fields')
    }
    if(email && password){
      firebaseLog(e);
    }
  };

  const firebaseLog = async (e) => {
    e.preventDefault();

    try {
      await login(email,password)
      setemptyFields([]);
      setError('');
      navigate("/");
      
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form className="login" >
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
