import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaQrcode,
} from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  function handleLogin() {

    if(email==="" || password===""){

      setMessage("Please fill all fields.");

      return;

    }

    setLoading(true);

    setTimeout(()=>{

      if(
        email==="admin@gmail.com" &&
        password==="Admin@123"
      ){

        navigate("/dashboard");

      }

      else{

        setMessage("Invalid Email or Password");

      }

      setLoading(false);

    },1500);

  }

  function handleClear(){

    setEmail("");

    setPassword("");

    setMessage("");

  }

  return(

<div className="login-container">

<div className="login-left">

<FaQrcode className="login-logo"/>

<h1>QR Attendance System</h1>

<p>

Smart Attendance Management

using React

</p>

</div>

<div className="login-right">

<div className="login-card">

<h2>Welcome Back 👋</h2>

<p className="subtitle">

Login to continue

</p>

<div className="input-group">

<FaUser className="input-icon"/>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

</div>

<div className="input-group">

<FaLock className="input-icon"/>

<input

type={showPassword?"text":"password"}

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<span

className="eye"

onClick={()=>setShowPassword(!showPassword)}

>

{

showPassword ?

<FaEyeSlash/>

:

<FaEye/>

}

</span>

</div>

<div className="buttons">

<button

onClick={handleLogin}

disabled={loading}

>

{

loading ?

"Logging..."

:

"Login"

}

</button>

<button

className="clear"

onClick={handleClear}

>

Clear

</button>

</div>

{

message &&

<p className="message">

{message}

</p>

}

<p className="demo">

Demo Login

<br/>

admin@gmail.com

<br/>

Admin@123

</p>

</div>

</div>

</div>

);

}

export default Login;