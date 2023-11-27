import React, { useState } from "react";
import { Icon } from '@iconify/react';
import TextInputs from "../components/shared/TextInputs";
import PasswordInput from "../components/shared/PasswordInputs";
import { Link, useNavigate } from "react-router-dom";
import { unathenticatedPOSTrequest } from "../utils/serverHelper";
import { NotificationContainer, NotificationManager } from "react-notifications";

const LoginComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const login = async () => {
        const data = { email, password }
        const response = await unathenticatedPOSTrequest("/api/user/sigin", data)
        if (response && !response.err) {
            // Store the user ID in localStorage
            localStorage.setItem("userId", response.user._id);
            console.log("User ID stored in localStorage:", response.user._id); // Log the user ID
            NotificationManager.success("Login successful", "Success", 2000);
            navigate("/loggedin")
        } else {
            NotificationManager.error("Failed to login. Please check your credentials.", "Error", 2000);
        }
    }

    return (
        <diV className="w-100 h-100 flex flex-col items-center">
            <div className="logo p-5 w-full border-b-solid border-gray-200 flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="ipnutRegion w-1/3 py-10 justify-center items-center flex flex-col">
                <div className="font-bold mb-12">
                    To continue, login in to spotify
                </div>
                <TextInputs
                    label="Email address or username"
                    placeholder={"Email address or username"}
                    className="my-2"
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
                <div className="w-full flex items-center justify-end my-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}

                    >LOG IN</button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <diV className="my-6 font-semibold text-lg">
                    Don't Have an account ?
                </diV>
                <diV className="w-full border border-gray-500 py-4 rounded-full items-center justify-center flex text-gray-500 font-bold">
                    <Link to="/signup">
                        SIGN UP FOR SPOTIFY
                    </Link>
                </diV>

                <NotificationContainer />
            </div>
        </diV>
    )
}

export default LoginComponent;