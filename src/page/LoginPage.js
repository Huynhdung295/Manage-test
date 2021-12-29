import React from "react";
import LoginHook from "../hook/LoginHook";

function LoginPage() {
  const { setParams, username, password, login } = LoginHook();
  return (
    <form>
      <div>
        <label>User name</label>
        <input
          type="text"
          name="userName"
          value={username}
          onChange={setParams}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={setParams}
        />
      </div>
      <div>
        <button type="button" onClick={login}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginPage;
