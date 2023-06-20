"use client";

import { useState } from "react";

async function registerUser(data) {
  const URL = "http://localhost:3000/api/auth";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(URL, options);
  return response;
}

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await registerUser({ email, password, task: "register" });
    const responses = await response.json();
    console.log({ responseFromForm: response.json });
    // si status 200 = form email and password = empty
    if (response.json.status === 200) {
      setEmail("");
      setPassword("");
      setMessage(`${response.json.message}`);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setMessage("Something went wrong");
    }
  }
  return (
    <>
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='mail'
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
		  <input type="submit" value="Creat" className="btn" />
        </form>
      </div>
	  { message && <div>{message}</div>}
    </>
  );
}
