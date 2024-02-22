import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

const ForgotPassForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setemptyFields] = useState([]);
  const { forgotPass } = UserAuth();

  // if(user){
  //   navigate("/")
  // }

  const handleForgot = async (e) => {
    e.preventDefault();
    setError('')

    if(!email){
      setemptyFields((oldVal) => [...oldVal, "email"])
      setError('Please fill in all fields')
    }
    if(email){
      firebaseForgotPass(e);
    }
  };

  const firebaseForgotPass = async (e) => {
    e.preventDefault();

    try {
      await forgotPass(email)
      setemptyFields([]);
      setError('');
      
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form className="login">
      <h3>Forgot Password</h3>
      <label>Email: </label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={emptyFields.includes("email") ? "error" : ""}
      />
      <div className="login-btn">
        <button onClick={handleForgot}>Forgot Password</button>
        </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ForgotPassForm;
