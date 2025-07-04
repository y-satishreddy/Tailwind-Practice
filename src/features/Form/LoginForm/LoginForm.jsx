import React, { useState } from "react";
function LoginForm() {
  let [userName, setUserName] = useState();
  let [password, setPassword] = useState();
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [error, setError] = useState("");
  function submitHandler() {
    if (
      userName.toLowerCase() === "admin" &&
      password.toLowerCase() === "12345678"
    ) {
      setIsLoggedIn(true);
      setPassword("");
      setUserName("");
    } else {
      if (password != "12345678" && userName != "admin") {
        setError("Both UserName and Password Are Wrong");
        setPassword("");
        setUserName("");
      } else if (password === "12345678" && userName != "admin") {
        setError("Enter the correct UserName.");
        setUserName("");
      } else {
        setError("Enter the correct Password.");
        setPassword("");
      }
    }
  }
  return (
    <>
      {isLoggedIn ? (
        <h1>Successfully Logged In</h1>
      ) : (
        <div className="h-[50%] w-[25%] bg-white-200 flex items-center justify-between flex-col border-2 p-2">
          <div className="flex items-center justify-between flex-col h-[100%] w-[100%]">
            <h1>Login Form</h1>
            <input
              type="text"
              className="w-[100%] border-1 placeholder:p-1"
              placeholder="Enter your name.."
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="password"
              className="w-[100%] border-1 placeholder:p-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error && <h1 className="text-red-600 text-[6px]">{error}</h1>}
            <button
              className="border-1 p-1 hover:bg-[#0A3A5E] hover:text-white"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginForm;
