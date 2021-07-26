import React from "react";
import { useLRAuth, withAuthenticationRequired } from "loginradius-react";

const Login = () => {
  const { user } = useLRAuth();
  // const uid = "c0e8eecb86674d88b24cb332cd250346";
  // const role = fetch(
  //   `https://api.loginradius.com/identity/v2/manage/account/${uid}/role`
  // )
  //   .then((response) => response.text)
  //   .then((data) => console.log(data)); 
  const entree = user["Uid"];
  // console.log(entree);
  return (
    
    <div>
      <span style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
        {JSON.stringify(user, null, 4)}
      </span>
    </div>
  );
};
export default withAuthenticationRequired(Login, {
  onRedirecting: () => <div>Loading...</div>,
  returnTo: "/login",
});
