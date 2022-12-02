import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <h3> Users List</h3>
      <Link to="add-user">
        <Button variant="primary">Add User</Button>
      </Link>{" "}
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user && user.firstname}</td>
                <td>{user && user.lastname}</td>
                <td>{user && user.email}</td>
              </tr>
            ))}
          {users.length <= 0 && (
            <tr>
              <td colSpan={4}> No Users</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
