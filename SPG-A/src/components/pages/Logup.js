import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock ,faEyeSlash,faEnvelope,faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import Footer from "./home/Footer";
import { useNavigate } from "react-router-dom";

const Logup = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");
  const [Email, setEmail] = useState("");
  var navigate = useNavigate();
  const [Error, setError] = useState({});

  const user = {
    name: Username,
    password: Password,
    email: Email,
  };

  const signUpUser = async (newUser) => {
    try {
      if (Password === ConPassword) {
        const res = await axios.post(
          "http://localhost:3000/api/user/signup",
          newUser
        );
        if ((res.status = 201)) {
          navigate("/signin");
        }
      }
    } catch (error) {
      setError();
    }
  };

  return (
    <div className="">
      <div className="container-signup flex items-center justify-center">
        <div className="signup-page flex mt-10">
          <div className="left-side  p-4 rounded-xl flex flex-col items-center mt-3">
            <h5 className="font-bold w-72 text-4xl text-[#171a29]">
              Join Us Now !
            </h5>
          </div>
          <div className="signup-form">
            <div className="title-logo flex items-center mt-2 ml-10">
              <h5 className="text-3xl font-bold text-[#171a29]">
                Sign Up With
              </h5>
              <a href="/">
                <img
                  src="https://res.cloudinary.com/dc0gmzuud/image/upload/v1723639535/Capture_d_%C3%A9cran_2024-08-14_134446-removebg-preview_knjeri.png"
                  height={15}
                  width={150}
                ></img>
              </a>
            </div>
            <div className="signup-form ml-10">
              <form className="">
                <div className="user-name mt-2">
                  <h5 className="font-semibold text-[#171a29]">Username</h5>
                  <div className="username-input rounded-lg flex items-center justify-center mt-2 border ">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-4 ml-1.5 text-[#171a29]"
                    />
                    <input
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter Username"
                      className=" w-44 p-2 ml-1.5 outline-none "
                    ></input>
                  </div>
                  {Error && (
                    <p className="text-sm text-[#e62626] w-44">
                      {Error.username}
                    </p>
                  )}
                </div>
                <div className="username-password flex mt-3 gap-8">
                  <div className="pass mt-2">
                    <h5 className="font-semibold text-[#171a29]">Password</h5>
                    <div className="pass-input flex items-center justify-center mt-2 border">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="w-4 ml-1.5 text-[#171a29]"
                      />
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type={ShowPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="w-44 p-2 ml-1.5 outline-none"
                      />
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="w-4 mr-2.5 text-[#171a29] cursor-pointer"
                        onClick={() => setShowPassword(!ShowPassword)}
                      />
                    </div>

                    {Error && (
                      <p className="text-sm text-[#e62626] w-44">
                        {Error.password}
                      </p>
                    )}
                  </div>
                  <div className="pass mt-2">
                    <h5 className="font-semibold text-[#171a29]">
                      Confirm Password
                    </h5>
                    <div className="pass-input flex items-center justify-center mt-2 border">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="w-4 ml-1.5 text-[#171a29]"
                      />
                      <input
                        onChange={(e) => {
                          setConPassword(e.target.value);
                        }}
                        type={ShowPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="w-44 p-2 ml-1.5 outline-none"
                      />
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="w-4 mr-2.5 text-[#171a29] cursor-pointer"
                        onClick={() => setShowPassword(!ShowPassword)}
                      />
                    </div>

                    {Error && (
                      <p className="text-sm text-[#e62626] w-44">
                        {Error.password}
                      </p>
                    )}
                  </div>
                </div>

                <div className="email mt-3 ">
                  <h5 className="font-semibold text-[#171a29]">Email</h5>

                  <div className="email-input flex items-center  mt-2 border">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 ml-1.5 text-[#171a29]"
                    />
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      placeholder="exemple@exemple.com"
                      className=" p-2 ml-1.5 outline-none "
                    />
                  </div>
                  {Error && (
                    <p className="text-sm text-[#e62626]">{Error.email}</p>
                  )}
                </div>
                <div className="phone-gendre flex gap-8">
                  <div className="phone mt-3"></div>
                </div>
                <div className="submit-btn mt-7 flex items-center justify-center">
                  <button
                    onClick={() => {
                      signUpUser(user);
                    }}
                    type="button"
                    className="bg-[#f1683a] px-10 py-2 text-[#fff] font-semibold rounded-md"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="have-account flex items-center justify-center p-2 mt-3 rounded-lg">
                <h5 className="text-[#171a29]">
                  Already have an account?{" "}
                  <a
                    href="signIn"
                    className=" bg-[#fff] p-1 text-[#f1683a] font-bold rounded-lg "
                  >
                    sign in
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logup;
