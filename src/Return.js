import React, { useState } from "react";
import { useLRAuth, withAuthenticationRequired } from "loginradius-react";

const CallAPI = () => {

  const [resp, setResp] = useState(null);
  const { user } = useLRAuth();
  const uid = user["Uid"];
  var response;
  const email = user["Email"];
  var emailmain = email[0].Value;
  
  
  (async () => {
    if (emailmain.toLowerCase() === "admin@gmail.com"){
      try {
          
        
        response = await fetch(
          `https://api.loginradius.com/identity/v2/manage/account/${uid}/role?apiKey=${process.env.REACT_APP_API_KEY}&apiSecret=${process.env.REACT_APP_SECRET}`,
          {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              roles: ["Admin"],
            }),
          }
        );
        setResp(await response.json());
      } catch (e) {
        console.error(e);
      }
    }
    else {
       try {
         response = await fetch(
           `https://api.loginradius.com/identity/v2/manage/account/${uid}/role?apiKey=${process.env.REACT_APP_API_KEY}&apiSecret=${process.env.REACT_APP_SECRET}`,
           {
             method: "PUT",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               roles: ["Client"],
             }),
           }
         );
         setResp(await response.json());
       } catch (e) {
         console.error(e);
       }
    }
  })();
  

  if (!resp) {
    return <div>Loading...</div>;
  }

  return <span>
    Welcome user : {uid}<br/>
    Email : {emailmain}<br/>
    {JSON.stringify(resp, null, 2)}
  </span>;
};

export default withAuthenticationRequired(CallAPI, {
  onRedirecting: () => <div>Loading...</div>,
});
