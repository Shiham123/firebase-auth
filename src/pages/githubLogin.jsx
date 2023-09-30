import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import FirebaseApp from '../firebase/firebase.init';
import { useState } from 'react';

const GithubPage = () => {
  const [gitUser, setGitUser] = useState({});

  const getGitAuth = getAuth(FirebaseApp);
  const gitProvider = new GithubAuthProvider();

  const handleGitSingIn = () => {
    signInWithPopup(getGitAuth, gitProvider)
      .then((result) => {
        setGitUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitSingOut = () => {
    signOut(getGitAuth)
      .then(() => {
        setGitUser(null);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>this is github page</h1>

      {gitUser ? (
        <button onClick={handleGitSingOut}>Git SingOut</button>
      ) : (
        <button onClick={handleGitSingIn}>Git SingIn</button>
      )}

      {gitUser && (
        <div>
          <h1>Git User : {gitUser?.displayName}</h1>
          <img src={gitUser.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default GithubPage;
