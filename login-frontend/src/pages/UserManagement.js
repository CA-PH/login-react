import { useEffect } from "react";

import { useUsersContext } from "../hooks/useUsersContext";
import UserDetails from "../components/User/UserDetails";
import UserForm from "../components/User/UserForm";

const UserManagement = () => {
  const { users, dispatch } = useUsersContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        console.log("nice");
        dispatch({ type: "SET_USERS", payload: json });
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="home" data-testid="home">
      <div className="users">
        {users &&
          users.map((user) => <UserDetails key={user._id} user={user} />)}
      </div>
      <UserForm />
    </div>
  );
};

export default UserManagement;
