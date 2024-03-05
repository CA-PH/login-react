import { useEffect, useState } from "react";

import { useUsersContext } from "../hooks/useUsersContext";
import UserDetails from "../components/User/UserDetails";
import UserForm from "../components/User/UserForm";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
    const { users, dispatch } = useUsersContext();
    const { user } = UserAuth();
    const navigate = useNavigate();
    const [ search, setSearch ] = useState("");

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
            <div className="search">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                    </div>

        {user && 
    <div className="home">
        <div className="users">
            {search.length > 0 ?
                            users && users.filter(x => x.fullname.toLowerCase().includes(search.toLowerCase())).map((user) => <UserDetails key={user._id} user={user} />)
                : users && users.map((user) => <UserDetails key={user._id} user={user} />)}
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
