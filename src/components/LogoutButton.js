import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} style={{color:"#31572C",backgroundColor:"#ECF39E", border:"none", height:"80%",marginTop:"3%",borderRadius:"5px"}}>
      Log Out
    </button>
  );
};

export default LogoutButton;