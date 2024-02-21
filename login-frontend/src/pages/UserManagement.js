import { useEffect } from "react";

import { useUsersContext } from "../hooks/useUsersContext";
import UserDetails from "../components/User/UserDetails";
import UserForm from "../components/User/UserForm";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const { users, dispatch } = useUsersContext();
  const { user } = UserAuth();
  const navigate = useNavigate();

  if(!user){
    navigate("/login")
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_USERS", payload: json });
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="home-container">
      {user && 
      <div className="home">
        <div className="users">
          {users &&
            users.map((user) => <UserDetails key={user._id} user={user} />)}
        </div>
        <div>
          <UserForm />
        </div>
      </div>
      }

    </div>
  );
};

export default UserManagement;
