import React from "react";
import "./Login.css";
import SlackLogo from "../../assets/images/Slack_RGB.svg";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
function Login() {
  const [, dispatch] = useStateValue();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => {
        console.log("Login failed", error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={SlackLogo} alt="" />
        <h1>Log in to slack clone</h1>
        <p>slack-clone.slack.com</p>
{/*         there should be "button" instead of "Button" because it is giving error */}
        <button onClick={login}>Log in with Google</button>
      </div>
    </div>
  );
}

export default Login;
