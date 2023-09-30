import { createUserWithEmailAndPassword } from 'firebase/auth';
import globalAuth from '../../firebase/firebase.init';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EmailRegister = () => {
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setRegisterError('');
    setRegisterSuccess('');

    createUserWithEmailAndPassword(globalAuth, email, password)
      .then((user) => {
        console.log(user);
        setRegisterSuccess('user created successfully');
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
              name="email"
            />
          </label>
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <label className="input-group">
            <span>Password</span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </label>
        </div>
        <button className="btn">Submit</button>{' '}
      </form>
      {registerError && <p>{registerError}</p>}
      {registerSuccess && <p>{registerSuccess}</p>}
    </div>
  );
};

export default EmailRegister;
