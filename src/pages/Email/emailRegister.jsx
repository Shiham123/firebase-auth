const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.email.value);
  console.log(event.target.password.value);
};

const EmailRegister = () => {
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
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
          </label>
        </div>
        <button className="btn">Submit</button>{' '}
      </form>
    </div>
  );
};

export default EmailRegister;
