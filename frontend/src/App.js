import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AddUser } from './components/AddUser';
import { UserList } from './components/UserList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<UserList/>}/>
        <Route exact path="/add-user" element={<AddUser/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
