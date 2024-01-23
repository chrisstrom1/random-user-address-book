import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api?results=25');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Random User Address Book</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <div>
              <strong>{`${user.name.first} ${user.name.last}`}</strong>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>
                Address: {user.location.street.number} {user.location.street.name}, {user.location.city}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
