import { useState } from "react";
import axios from "axios";
import validator from "validator";

export const UserRegister = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [IsPasswordStrong, setIsPasswordStrong] = useState(false);

  const validate = (value) => {
    const isStrong = validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
    setIsPasswordStrong(isStrong);

    if (value === "") {
      setValidationMessage("");
    } else if (isStrong) {
      setValidationMessage("Strong password!");
    } else {
      setValidationMessage("Password is too weak");
    }
  };

  const fetchData = async () => {
    const users = await axios.get(`${API_URL}/users`);
  };

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      alert(
        "Password does not meet strength requirements! Min 8 characters, including small and large letters, a number, and a symbol."
      );
      return;
    }

    const newUser = {
      username: userName,
      password: password,
    };

    try {
      const response = await axios.post(`${API_URL}/users`, newUser);
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
            <span
              className={
                IsPasswordStrong ? "strong-password-span" : "weak-password-span"
              }
            >
              {validationMessage}
            </span>
          )}
          <div>
            <button className="registerButton" type="submit">
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
