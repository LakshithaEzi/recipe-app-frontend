import { useState } from 'react';

function Login() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <form>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="justify-center px-6 text-left bg-white rounded-lg shadow-md py-14">
          <img
            src="https://i.postimg.cc/MKD7wbB5/Cook.png"
            alt="Logo"
            className="h-[40px] items-center justify-center px-[140px]"
          />
          <br />
          <div className="justify-center mb-4 text-2xl font-semibold text-gray-700">Login</div>
          <div className="flex items-center justify-center">
            <label className="relative">
              <input
                type="text"
                placeholder="E-mail"
                className="h-[40px] w-96 px-6 text-xl text-gray-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(emailValue !== '')}
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <span
                className={`absolute px-2 text-base transition-all duration-300 ${
                  emailFocus || emailValue !== ''
                    ? 'text-xs text-blue-700 -top-2 left-2 bg-white'
                    : 'text-gray-500 top-3 text-xl left-6 bg-transparent'
                }`}
              >
                Email address
              </span>
            </label>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <label className="relative">
              <input
                type="password"
                placeholder="Password"
                className="h-[40px] w-96 px-6 text-md text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(passwordValue !== '')}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <span
                className={`absolute px-2 text-base transition-all duration-300 ${
                  passwordFocus || passwordValue !== ''
                    ? 'text-xs text-blue-700 -top-2 left-2 bg-white'
                    : 'text-gray-500 top-3 text-xl left-6 bg-transparent'
                }`}
              >
                Password
              </span>
            </label>
          </div>
          <br />
          <div className="flex justify-between">
            <button
              className="bg-[#eb4e87] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              SIGN IN
            </button>
          </div>
          <div className="mt-4 text-center">
            <div className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-700">
              Don't have an account? <span className="font-semibold text-red-300"><a href="">Create an account</a></span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;