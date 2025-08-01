import "./Login.css";
import logo from "../../assets/logoELearning.png";
import avatarInput from "../../assets/UserInputAvatar.png";
import passwordInput from "../../assets/passwordInput.png";
import logoContentRightSide from "../../assets/logoContentRightSide.png";

export function Login() {
  return (
    <div className="login-container">
      <div className="background-container">
        <div className="content-left-container">
          <img className="logo-ELearning" src={logo} alt="logo-ELearning"></img>
          <h1 className="form-heading">WELCOME TO</h1>
          <h2 className="form-nav">E-Learning</h2>
          <div className="input-container">
            <div className="form-container">
              <img
                className="image-logo"
                src={avatarInput}
                alt="avatar logo"
              ></img>
              <input
                className="type-input"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-container">
              <img
                className="image-logo"
                src={passwordInput}
                alt="password password"
              ></img>
              <input
                className="type-input"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="button-signIn">
            <p>SIGN IN</p>
          </div>
        </div>
        <div className="content-right-container">
          <img
            className="logo-Content"
            src={logoContentRightSide}
            alt="logo study"
          ></img>
          <p>
            “Education is the passport to the future, for tomorrow belongs those
            who prepare for it today.”
          </p>
        </div>
      </div>
    </div>
  );
}
