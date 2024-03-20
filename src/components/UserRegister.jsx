import { useState } from "react"
import axios from "axios";


    export const UserRegister = () =>{
    
    const [userName, setUserName] = useState("")
    const  [password, setPassword] = useState("")
    const [showForm, setShowForm] = useState("")

    const fetchData = async () => {
      const users = await axios.get("http://localhost:5001/users")
    }
    
    const handleRegisterClick = () => {
      setShowForm(true)
    }

    const handleRegister = async (event) => {
        event.preventDefault()

      const newUser = {
        username: userName, 
        password: password
      }
      ;
      try {
      const response = await axios.post("http://localhost:5001/users", newUser)
        console.log("userRegisterd",response.data)
        alert("User registerd Succesfully :)")
        setShowForm(false)
        fetchData()
        window.location.reload();
      }catch(err){
        console.log("Error registering", err)
        alert("User registerd Fail :(")
      }

      setUserName("")
      setPassword("")

      console.log("User registered: ", newUser)

    }

    return (

      <div>
        {!showForm && (
          <button onClick={handleRegisterClick}>Register</button>
        )}
        {showForm && ( 
        <form className="register" onSubmit={handleRegister}>
          <input
            type='text'
            value={userName} 
            name='UserName'
            placeholder='UserName'
            autoComplete='current-userName'
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type='password'
            value={password} 
            name='Password'
            placeholder='Password'
            autoComplete='current-password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type='submit'> 
            Register
          </button>
         
        </form>
        )}
        </div>
      );
    };

