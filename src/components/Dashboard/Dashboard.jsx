import { useEffect, useContext, useState } from 'react';

import { UserContext } from '../../contexts/UserContext';

import * as userService from '../../services/userService';

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await userService.index();
                setUsers(fetchedUsers);
            } catch (err) {
                console.log(err)
            }
        }
        if (user) fetchUsers();
    }, [user]);

  return (
        <main>
            <h1>Welcome, {user.username}</h1>
            <p>
                This is the dashboard page where you can see a list of all the users.
            </p>
            {users.length > 0 ? (
                <ul>
                    {users.map((fetchedUser) => (
                        <li key={fetchedUser._id || fetchedUser.id}>
                            {fetchedUser.username}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </main>
    );
};

export default Dashboard;
