import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const login = () => {};
  return (
    <div>
      <form action="" onSubmit={login}>
        <h2>Username</h2>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
