import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import moment from "moment/moment";

export default function Navbar(nav) {
  let location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/About");
  };
  const detail = JSON.parse(localStorage.getItem("detail"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("detail");
    navigate("/Login");
    nav.showAlert("info", "Logged Out");
  };
  const wrap=()=>{
    if(document.getElementById('navContent')){
      let wrapC=document.getElementById('dropDown');
      if(wrapC.style.display !='block'){
        // console.log("click")
        wrapC.style.display='block';
      }
      else{
        wrapC.style.display='none';
      }
    }
  }
  return (
    <nav id="navContent">
      <span
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        className="navH"
      >
        {nav.header}
      </span>
      {/* <Link className={`navA ${location.pathname==='/About'? "active":""}`} to="/About">
        About
      </Link> */}
      {!localStorage.getItem("token") ? (
        <>
          <Link className={`navA `} to="/signup">
            <div style={{ marginTop: "-1px" }} className="navIcon">
              <i
                className="fa fa-user-plus"
                style={{
                  fontSize: "18px",
                  fontFamily: " FontAwesome",
                }}
              ></i>
              {/* <br/> */}
              <small
                style={{
                  fontSize: "10px",
                  fontFamily: "arial",
                  lineHeight: "18px",
                }}
              >
                Sing Up
              </small>
            </div>
          </Link>

          <Link className={`navA`} to="/login">
            <div className="navIcon">
              <i
                className="fa fa-sign-in"
                style={{
                  fontSize: "25px",
                  fontFamily: " FontAwesome",
                }}
              ></i>
              {/* <br/> */}
              <small style={{ fontSize: "10px", fontFamily: "arial" }}>
                Login
              </small>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="navIcon navA"  onClick={wrap}  id="userWrap">
            <i
              className="fa fa-user"
              style={{
                fontSize: "25px",
                fontFamily: " FontAwesome",
              }}
            />
            <small
              style={{
                fontSize: "10px",
                fontFamily: "arial",
                cursor: "pointer",
              }}
            >
              User &#8595;
            </small>
          </div>
          <div id="dropDown" >
            <span id="detail" >
              {localStorage.getItem("detail") ? detail.name : "user"}
              <br />
             
              <small>
                {" "}
                Joined :{" "}
                {localStorage.getItem("detail")
                  ? moment(detail.date).format("LL")
                  : "user"}
              </small>
            </span>
            <br />
            <div style={{borderTop:"#a7dae4 1px solid",cursor:"pointer"}} onClick={handleLogout}>
              <i
                className="fa fa-sign-out"
                style={{
                  color:"#25809b",
                  fontSize: "20px",
                  fontFamily: " FontAwesome",
                }}
              ></i>{" "}
              &nbsp;
              {/* <br/> */}
              <span
                style={{
                  color:"#25809b",
                  fontFamily: "arial",
                  cursor: "pointer",
                }}
              >
                Logout
              </span>
            </div>
          </div>
          <Link
            className={`navA ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            <div className="navIcon">
              <i
                className="fa fa-home"
                style={{
                  fontSize: "25px",
                  fontFamily: " FontAwesome",
                }}
              ></i>
              {/* <br/> */}
              <small style={{ fontSize: "10px", fontFamily: "arial" }}>
                Home
              </small>
            </div>
          </Link>
        </>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  header: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  header: "Your Title will Come here",
};
