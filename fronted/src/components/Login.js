import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = ({ props }) => {
  const [verfiy, Setverfiy] = useState(false);
  const history = useNavigate();
  // const [islogged, setIsLogged] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (respose) => {

      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }  
        );
        addinpdata(res.data);
       
        history("/home");
      } catch (err) {
        console.log(err);
      }
    },
  });

 

  // useEffect(() => {}, [islogged]);
  const addinpdata = async (userdata) => {
    console.log(userdata, "userdata");
    let isLogged = false;
    console.log("uwgrweygryewt",isLogged)
   
    axios({
      method: "POST",
      url: "http://localhost:8005/api/user/userSave",
      data: {
        family_name: userdata.family_name,
        name: userdata.name,
        given_name: userdata.given_name,
        email: userdata.email,
        locale: userdata.locale,
        picture: userdata.picture,
        sub: userdata.sub,
      },
    })
      .then((res) => {
         isLogged = true;
        console.log(res);
        console.log("uwgrweygryewt",isLogged)
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={login}>
          <span>
            {" "}
            <i className="fa fa-google" aria-hidden="true"></i>
          </span>
          Continue with google
        </button>
      </header>
    </div>
  );
};

export default Login;
