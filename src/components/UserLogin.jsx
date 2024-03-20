import { useEffect, useState } from "react"
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001"
    export const UserLogin = ({setUserIsLogin}) =>{
    
    const [userName, setUserName] = useState("")
    const  [password, setPassword] = useState("")
    const [showForm, setShowForm] = useState("")
    const [userData, setUserData] = useState(null)

   const fetchData = async () => {
    const users = await axios.get(`${API_URL}/users`)
    setUserData({users: users.data})
   }

   useEffect(() =>{
    fetchData()
   }, [])
    
    const handleLoginClick = () => {
      setShowForm(true)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        setUserIsLogin(true)

        const registeredUser = userData.users.find(
            (user) => user.username === userName && user.password === password
          );
      
          if (registeredUser) {
            console.log("User logged in:", registeredUser);
            alert("User logged in Succesfully :)");
            setShowForm(false);
            setUserName("");
            setPassword("");
          } else {
            console.log("Invalid username or password");
            alert("Invalid username or password :(");
            setUserName("");
            setPassword("");
          }

    }

    return (

      <div>
        {!showForm && (
          <button onClick={handleLoginClick}>Login</button>
        )}
        {showForm && ( 
        <form className="login" onSubmit={handleLogin}>
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
            login
          </button>
         
        </form>
        )}
        </div>
      );
    };
