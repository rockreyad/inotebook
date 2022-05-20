
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });

    const json = await response.json();

    //console.log(json);

    if (json.success) {
      //Save the auth token and redirect

      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Logged in Successfully", "Success", "green");
    } else {
      props.showAlert("Invalid Credential", "Error", "red");
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-xl rounded my-8">
        <div className="text-center text-gray-600 py-4 font-bold text-2xl">
          Sign in with
        </div>
        <div className="flex justify-center mb-10">
          <button className="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
            <svg
              className="fill-current text-gray-600 w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
            </svg>
            <div className="text-indigo-700">Google</div>
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="bg-gray-200 pt-8 pb-16">
            <div className="text-center text-gray-600 mb-6">
              Or sign in with Email & Password
            </div>
            <div className="w-4/5 mx-auto">
              <div className="flex items-center bg-white rounded shadow-md mb-4">
                <span className="px-3">
                  <svg
                    className="fill-current text-gray-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
                  </svg>
                </span>
                <input
                  className="w-full h-12 focus:outline-none"
                  type="email"
                  name="email"
                  value={credential.email}
                  placeholder="Email"
                  onChange={onChange}
                />
              </div>
              <div className="flex items-center bg-white rounded shadow-md mb-4">
                <span className="px-3">
                  <svg
                    className="fill-current text-gray-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                </span>
                <input
                  className="w-full h-12 focus:outline-none"
                  type="password"
                  name="password"
                  value={credential.password}
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>

              <button className="bg-indigo-600 block mx-auto text-white text-sm uppercase rounded shadow-md px-6 py-2">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
