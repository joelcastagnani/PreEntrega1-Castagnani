import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getUsers = fetch("https://jsonplaceholder.typicode.com/users");
    getUsers.then((res) => res.json()).then((res) => setUsers(res));
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default Users;
