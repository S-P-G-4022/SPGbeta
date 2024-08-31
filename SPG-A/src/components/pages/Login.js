
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from './home/Footer';
import { AuthData } from '../../auth/AuthWrapper';
import { useReducer } from 'react';
export default function Login() {
     const navigate = useNavigate();
     const { login } = AuthData();
     const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, {email: "", password: ""})
     const [ errorMessage, setErrorMessage ] = useState(null)
     
     const doLogin = async () => {
          try {
               
             let res=  await login(formData.email, formData.password)
             console.log(res);
             
               if (res.message==='Login succeeded') {
                 navigate("/")
               }
                else{
                  setErrorMessage(res.response.data)

                }
 
                
                
          } catch (error) {
            console.log(error);
           
               
          }
          
     }


  return (
    <div className="">
     
      <div className="flex items-center justify-center mt-14">
        <div className="login-page flex gap-4 overflow-hidden">
          <div>
            <img   src={"https://images.hdqwalls.com/download/doom-eternal-8k-es-1680x1050.jpg"} width={800} height={500} alt="Picture of the author" className="" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Ready to start your success story?</h2>
            <p className="text-gray-600 font-semibold mb-4">Please enter your email address and password to proceed</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="Email" className="block font-semibold text-gray-700">Email</label>
                <div className="flex border mt-4 p-2.5 rounded-lg">
                  <FontAwesomeIcon icon={faAt} className="w-4 ml-1.5 text-[#171a29]" />
                  <input
                    id="Email"
                    className="w-full ml-2 outline-none"
                    placeholder="Enter your email address"
                    type="text"
                    value={formData.email} onChange={(e) => setFormData({email: e.target.value}) } 
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold text-gray-700">Password</label>
                <div className="flex border mt-4 p-2.5 rounded-lg">
                  <FontAwesomeIcon icon={faLock} className="w-4 ml-1.5 text-[#171a29]" />
                  <input
                    id="password"
                    className="w-full ml-2 outline-none"
                    placeholder="Enter Password"
                    type="password"
                    value={formData.password} onChange={(e) => setFormData({password: e.target.value}) } 
                    required
                  />
                </div>
                {errorMessage ?
                    <div className="mt-8 flex items-center justify-center bg-[#EF665B] p-2 w-68 text-sm font-bold text-[#fff] rounded-lg">{errorMessage}</div>
                    : null }
              </div>
            </form>
            <button
              className="w-full px-6 py-3 mt-3 bg-primary text-white rounded-lg  hover:text-primary border-2 border-[#f79d27] transition-colors duration-300"
              type="button"
              onClick={doLogin}
            >
              Login
            </button>
            <div className="signup-sugg">
              <h5 className="mt-3 flex items-center justify-center">Don't have an account? <a href='/signUp' className="text-[#f79d27] ml-3 font-bold">Sign up</a> </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
