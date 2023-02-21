import React from "react";

const Login = () => {
  return (
    <>
      <h1>Login page</h1>
      <form>
        <label>email</label>
        <input type="email" placeholder="Your email" required />
        <label>password</label>
        <input
          type="password"
          placeholder="Your password"
          autoComplete="off"
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
