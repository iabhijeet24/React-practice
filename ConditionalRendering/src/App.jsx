import { useState } from 'react'
import SimpleForm from "./SimpleForm"; 


import './App.css'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);

  const handleLogout = () => setLoggedIn(false);

  return (
    <div style={{ padding: "2rem" }}>
      {loggedIn ? (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      ) : (
        <>
          <SimpleForm />
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button onClick={handleLogin}>Mock Login</button>
          </div>
        </>
      )}
    </div>
  );
}
