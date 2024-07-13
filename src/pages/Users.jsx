import { useFetch } from "../hooks/useFetch";

const Users = () => {
  let users  = useFetch("https://jsonplaceholder.typicode.com/users", []);
  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default Users;
