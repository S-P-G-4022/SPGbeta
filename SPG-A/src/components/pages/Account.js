import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser ,faCartShopping ,faHeart,faHandHoldingHeart,faGear,faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import axios from "../../auth/axios";
const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-primary text-white flex float-left">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <nav>
          <ul>
            <li className="mb-4">
            
              <a href="#" className="flex items-center ">
              <span className="material-icons mr-2 text-1.5xl font-bold mb-4">  <FontAwesomeIcon icon={faUser} /> My Account</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center">
              
                <span className="material-icons mr-2 text-1.5xl font-bold mb-4"> <FontAwesomeIcon icon={faCartShopping} />shopping_cart</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center">
                <span className="material-icons mr-2 text-1.5xl font-bold mb-4"><FontAwesomeIcon icon={faHeart} />Favories</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center">
                <span className="material-icons mr-2 text-1.5xl font-bold mb-4"><FontAwesomeIcon icon={faHandHoldingHeart} />Wish List</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center">
                <span className="material-icons mr-2 text-1.5xl font-bold mb-4"><FontAwesomeIcon icon={faGear} />Settings</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center">
                <span className="material-icons mr-2 text-1xl font-bold mb-4"><FontAwesomeIcon icon={faCircleInfo} />Help Center</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <FontAwesomeIcon icon="fa-regular fa-user" />
    </div>
  );
};

const ProfileContent = () => {
     const [User,setUser]=useState()
     async  function  getUser() {
      try {
        let {data}= await axios.get('http://localhost:3000/api/user/getUser')
        console.log(data);
        
        setUser(data);
      } catch (error) {
        console.log(error);
      }
         
          
     }
     useEffect(function () {
          getUser()
     },[])
  return (
    <div className="w-3/4 p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Overview</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div class="flex justify-end">
  <img src={User?.userProfile.profilePicture} alt="Image" class="rounded-full w-20 h-20 object-cover"/>
</div>
        <div className="flex items-center justify-between">
       
          <div>
            <h3 className="text-xl font-bold">PROFILE</h3>
            {User?.name}
            <p className="text-gray-600">Complete your profile (33%)</p>
          </div>
          <div className="text-right">
            <button className="text-gray-500 hover:text-gray-700">
              <span className="material-icons">edit</span>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold">user email</p>
          <p>{User?.email}</p>
        </div>
        <div className="mt-6">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  Profile Completion
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  33%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: "33%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">LATEST PURCHASES</h3>
        <p className="text-gray-500">No purchases yet.</p>
      </div>
    </div>
  );
};

const Account = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <ProfileContent />
    </div>
  );
};

export default Account;
