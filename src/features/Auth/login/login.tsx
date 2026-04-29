import "./login.scss";
const Login = () => {
  return (
    <div className="login-container">
        <form action="#" method="POST" className="login-form">
            <h2>Login</h2>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter Username" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>
        </form>
    </div>
  );
}
export default Login;