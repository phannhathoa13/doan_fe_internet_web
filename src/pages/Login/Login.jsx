import logo from '../../assets/logoELearning.png'
import avatarInput from '../../assets/UserInputAvatar.png'
import passwordInput from '../../assets/passwordInput.png'

export function Login () {
  return (
    <div className='background-container'>
      <div className='content-left-container'>
        <h1 className='form-heading'>WELCOME TO</h1>
        <h2 className='form-nav'>E-Learning</h2>
        <div className='input-container'>
          <img src={logo} alt='logo-ELearning'></img>
          <form typeof='text'>Username</form>
        </div>
        <div className='input-container'>
          <img src={avatarInput} alt='lavatar-input'></img>
          <form typeof='password'>Password</form>
        </div>
        <button className='button-signIn'>SIGN IN</button>
      </div>
      <div className='content-right-container'>
        <img src={passwordInput} alt='password-input'></img>
        <p>
          “Education is the passport to the future, for tomorrow belongs those
          who prepare for it today.”
        </p>
      </div>
    </div>
  )
}
