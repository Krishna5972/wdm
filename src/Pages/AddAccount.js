import "../style.css";
import { Helmet } from "react-helmet";

export function AddAccount() {
  return (
    <>
      <Helmet>
        <title>Academic Program Homepage</title>
      </Helmet>
      <div style={{ textAlign: "center" }}>
        <h2>Welcome to the Educational Performance Management System (EPMS)</h2>
      </div>
      <h1>Create User Account</h1>

      <div className="container2">
        <div className="card2">
          <div className="card-body login-card-body">
            <form action="teacherlogin_process.php" method="POST">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="checkbox-container">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <button
                  type="submit"
                  name="teacherlogin"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="registration-link">
              <a href="teacherregister.php">
                Don't have an account? Register here.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAccount;
