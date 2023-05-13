import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await userData.json();
      setUsers(result);
      console.log(result, "respose from user data api");
    };
    getUsers();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
