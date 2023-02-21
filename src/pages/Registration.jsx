import React from "react";

const Registration = () => {
  return (
    <>
      <h1>Registration Page</h1>
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
        <button type="submit">Registration</button>
      </form>
    </>
  );
};

export default Registration;
