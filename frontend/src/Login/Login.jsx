import "./Login.css";

function Login() {
  return (
    <>
      <div className="body">
        {/*  Main container for the login form  */}
        <div class="container">
          {/*quiz form Heading*/}

          <h2>Login</h2>

          {/*  Login form starts  */}
          <form action="#">
            {/* Username input field  */}
            <div class="input-box">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>

            {/*  Password input field  */}
            <div class="input-box">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/*  Login button  */}
            <button type="submit" class="btn">
              Login
            </button>

            {/*  Link to sign-up page  */}
            <p class="link">
              Don’t have an account? <a href="signup.html">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
