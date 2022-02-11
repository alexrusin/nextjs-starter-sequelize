import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    axios
      .get('/api/users')
      .then(({ data }) => {
        setUsers(data.users);
      })
      .catch((error) => {
        let message;
        if (error.response) {
          message = error.response.data.message;
        } else {
          message = error.message;
        }
        setErrorMessage(message);
      });
  }, []);

  return (
    <div className="p-6">
      <div>
        <h1 className="mb-4 text-lg">Users:</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {users.map((user) => (
          <p>
            {user.first_name} {user.last_name} | {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}
