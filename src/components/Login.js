import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import invoiceContext from "../context/invoice/invoiceContext";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [credentials, setCredentials]= useState({email:"", password:""})

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login",{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({email:credentials.email,password: credentials.password})
      });
      const json= await response.json()
      
      console.log(json)
      if(json.success){
        localStorage.setItem('token',json.authtoken);
        //redirect
        userDetail(json.authtoken);
        navigate("/");
        props.showAlert("success","Login Success");
      }
      else{
        props.showAlert("warning","Invalid Credentials");
      }
    };

    const userDetail= async (token)=>{
      const response = await fetch("http://localhost:5000/api/auth/getuser",{
        method: 'POST',
        headers:{
          'authToken':token,
        }
      });
      const json= await response.json()
      localStorage.setItem('detail',JSON.stringify(json));
    }

    const onChange = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value });
    };
   
    return (
      <div className="content" >
        <Link className="back" to="/about">
      <i  style={{
          fontSize: "25px",
          fontFamily: " FontAwesome",
        }} className="fa fa-arrow-left"></i>
      </Link>
        <span className="invoiceF">Log In</span>
        <form id="loginFrame" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            // onBlur={onBlur}
            id="email"
            value={credentials.email}
            name="email"
            onChange={onChange}
            placeholder="Enter your email.."
          />
          {/* <br/>
          <label style={{lineHeight:"5px"}} htmlFor="description">Description:</label>
          <br />
          <textarea
            onBlur={onBlur}
            onChange={onChange}
            type="text"
            id="description"
            value={invoice.description}
            name="description"
            rows={3}
            cols={25}
            placeholder="Enter Details.."
          /> */}
          <br/>
          {/* <br/> */}
          
          <label htmlFor="password" style={{lineHeight:"80px"}}>Password:</label>
          <input style={{marginBottom:"30px"}}
            type="password"
            name="password"
            value={credentials.password}
            id="password"
            // value={invoice.tag}
            onChange={onChange}
            placeholder="type password"
          />
          <br />
        
          {/* <br /> */}
          {/* <div className="atleast"><small style={{marginTop:"0px",}}>*Enter atleast 5 characters</small></div> */}

          <button  type="submit" >
          Login
          </button>
          
        </form>
      </div>
    );
}

export default Login
