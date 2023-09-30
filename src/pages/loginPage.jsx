import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import FirebaseApp from '../firebase/firebase.init';

import { useState } from 'react';

const LoginPage = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(FirebaseApp);
  const googleProvider = new GoogleAuthProvider();

  const handleGooglSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const LoggedInUser = result.user;
        setUser(LoggedInUser);
        console.log(LoggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSingOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>this is login page</h1>

      {user ? (
        <button onClick={handleGoogleSingOut}>Google SingOut</button>
      ) : (
        <button onClick={handleGooglSingIn}>Google SingIn</button>
      )}
      {user && (
        <div>
          <h1>User : {user?.displayName}</h1>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
