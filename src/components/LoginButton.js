import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect({ returnTo: window.location.origin })}
  style={{color:"#31572C",backgroundColor:"#ECF39E", border:"none", height:"80%",marginTop:"3%",borderRadius:"5px"}}>Log In</button>;

};

export default LoginButton
;