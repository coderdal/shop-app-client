import { useState } from "react";

import { BiHide } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // cr
    console.log("username:", username);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="flex justify-center items-center min-h-screen ">
        <div className="max-w-md w-[440px] h-72 p-6 bg-white rounded-lg shadow-md flex flex-col items-center max-sm:w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form
            onSubmit={handleSubmit}
            className="w-full px-6 max-sm:w-64 max-sm:px-4"
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="input-bar"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-bar"
                required
              />
              <button
                type="button"
                className="absolute top-1/3 right-2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BiHide /> : <AiOutlineEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
