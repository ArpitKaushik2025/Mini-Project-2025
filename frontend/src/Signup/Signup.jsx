import "./Signup.css";

function Signup() {
  return <>
    {/*  Main container for the sign-up form  */}
    <div class="container">
      {/*  Heading of the form  */}
      <h2>Sign Up</h2>

      {/* Sign-up form starts  */}
      <form action="#">
           
        {/*  Username input   */}
        <div class="input-box">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" required />
        </div>

        {/*  Password input */}
        <div class="input-box">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>

        {/*  Confirm password input */}
        <div class="input-box">
          <label for="confirm">Confirm Password</label>
          <input type="password" id="confirm" placeholder="Confirm your password" required />
        </div>

        {/* <!-- Sign-up button --> */}
        <button type="submit" class="btn">Sign Up</button>

        {/* <!-- Link to login page --> */}
        <p class="link">Already have an account? <a href="login.html">Login</a></p>
      </form>
    </div>
  </>;
}

export default Signup;
