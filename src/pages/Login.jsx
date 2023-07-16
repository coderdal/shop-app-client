import { useState } from "react";

import { BiHide } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Make sure you enter your username or password.", {
        autoClose: 2300,
        hideProgressBar: true,
      });
      return;
    }

    // Check if username and password meet the minimum length requirements
    if (username.length < 3 || password.length < 6) {
      toast.error(
        "Username must be at least 3 characters long, and password must be at least 6 characters long.",
        {
          autoClose: 2300,
          hideProgressBar: true,
        }
      );
      return;
    }

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(async (res) => {
        const json = await res.json();

        if (res.status === 200) {
          localStorage.setItem("accessToken", json.accessToken);
          localStorage.setItem("refreshToken", json.refreshToken);

          toast.success("Login successful!", {
            autoClose: 2300,
            hideProgressBar: true,
          });

          setTimeout(() => {
            navigate("/");
          }, 2300);

          return json;
        }

        if (res.status === 400) {
          toast.error(json.error, {
            autoClose: 2300,
            hideProgressBar: true,
          });

          return json;
        }

        if (res.status === 401) {
          toast.error(json.error, {
            autoClose: 2300,
            hideProgressBar: true,
          });

          return json;
        }

        if (res.status === 404) {
          toast.error(json.error, {
            autoClose: 2300,
            hideProgressBar: true,
          });

          return json;
        }

        if (res.status === 500) {
          toast.error(json.error, {
            autoClose: 2300,
            hideProgressBar: true,
          });

          return json;
        }
      })
      .then(() => {
        // console.log(result);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="flex justify-center items-center min-h-screen ">
        <div className="max-w-md w-[440px] h-[310px] p-6 bg-white rounded-lg shadow-md flex flex-col items-center max-sm:w-full">
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
              Login
            </button>
          </form>
          <p className="w-full text-center py-4 text-sm hover:opacity-90">
            <Link to={"/signup"}>
              Don&apos;t have an account yet?{" "}
              <span className="font-bold text-indigo-700">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
