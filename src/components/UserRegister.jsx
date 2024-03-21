import { useState } from "react";
import axios from "axios";
import validator from "validator";

export const UserRegister = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const validate = (value) => {
    if (value === "") {
      validationMessage("");
    } else if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setValidationMessage("is a strong password");
    } else {
      setValidationMessage(
        "Min 8 characters, small and large, a number and a symbol"
      );
    }
  };

  const fetchData = async () => {
    const users = await axios.get("http://localhost:5001/users");
  };

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const newUser = {
      username: userName,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:5001/users", newUser);
      console.log("userRegisterd", response.data);
      alert("User registerd Succesfully :)");
      setShowForm(false);
      fetchData();
      window.location.reload();
    } catch (err) {
      console.log("Error registering", err);
      alert("User registerd Fail :(");
    }

    setUserName("");
    setPassword("");

    console.log("User registered: ", newUser);
  };

  return (
    <div>
      {!showForm && <button onClick={handleRegisterClick}>Register</button>}
      {showForm && (
        <form className="register" onSubmit={handleRegister}>
          <input
            type="text"
            value={userName}
            name="UserName"
            placeholder="Username"
            autoComplete="current-userName"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="password"
            value={password}
            name="Password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(event) => {
              setPassword(event.target.value);
              validate(event.target.value);
            }}
          />
          {validationMessage && (
            <span className="weak-password-span">{validationMessage}</span>
          )}
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};
