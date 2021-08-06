import React, { useEffect, useState } from "react";
import { useLRAuth, withAuthenticationRequired } from "loginradius-react";

const CallAPI = () => {
  const { getAccessTokenSilently } = useLRAuth();
  const [resp, setResp] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
        `https://api.loginradius.com/identity/v2/auth/access_token/validate?access_token=${token}&apiKey=${process.env.REACT_APP_API_KEY}`,
          {}
        );
        setResp(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!resp) {
    return <div>Loading...</div>;
  }

  return (
    <span>{JSON.stringify(resp, null, 2)}</span>
  );
};

export default withAuthenticationRequired(CallAPI, {
    onRedirecting: () => <div>Loading...</div>, 
    });