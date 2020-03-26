import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';

function App() {
  const [signedIn, setSignedIn] = useState([]);

  const googleLoginSuccess = response => {
    console.log(response.profileObj.name);
    setSignedIn([...signedIn, response.profileObj.name]);
  };

  const googleLoginFailure = response => {
    console.log('Something went wrong with the login. Ask the big man.');
  };

  useEffect(() => {
    console.log(`signedIn has changed, it is now ${signedIn}`);
  }, [signedIn]);

  return (
    <GoogleLogin
      clientId='121431919294-gd4pja6n0j259ntk3jhe70h49i24cf78.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={googleLoginSuccess}
      onFailure={googleLoginFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default App;
