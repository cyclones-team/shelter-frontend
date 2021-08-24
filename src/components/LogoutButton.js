import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="shadow border p-1 rounded" onClick={() => logout({ returnTo: window.location.origin })} style={{fontSize: "120%",color:"#8a5a6c",backgroundColor:"#F2F2F2", height:"80%",width:"100px" , marginTop:"3%",borderRadius:"5px"}}>
      Log Out
    </button>
  );
};

export default LogoutButton;