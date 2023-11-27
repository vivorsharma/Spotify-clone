import React, { useState } from "react";
import { Icon } from '@iconify/react';
import TextInputs from "../components/shared/TextInputs";
import PasswordInput from "../components/shared/PasswordInputs";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { unathenticatedPOSTrequest } from '../utils/serverHelper'


const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    

    const signUp = async () => {
        if (email !== confirmEmail) {
            console.log("Email does not match"); // Add console.log for debugging
            alert("Email does not match");
            return;
        }

        const data = { email, password, firstName, lastName, userName };
        console.log("Sign up data:", data); // Add console.log for debugging
        const response = await unathenticatedPOSTrequest("/api/user/signup",
            data
        );
        console.log("Sign up response:", response); // Add console.log for debugging
        if (response && !response.err) {
            console.log("Sign up success"); // Add console.log for debugging
            alert("Success");
            navigate("/home");
        } else {
            console.log("Sign up failure"); // Add console.log for debugging
            NotificationManager.error("Sign up failed. Please check your information and try again.");
        }
    }

    return (
        <diV className="w-100 h-100 flex flex-col items-center">
            <div className="logo p-5 w-full border-b-solid border-gray-200 flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="ipnutRegion w-1/3 py-10 justify-center items-center flex flex-col">
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>
                <TextInputs
                    label="Email address"
                    placeholder={"Enter your email"}
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <TextInputs
                    label="Confirm Email Address"
                    placeholder={"Enter your email again"}
                    className="mb-6"
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                />
                <TextInputs
                    label="UserName"
                    placeholder={"Enter your UserName"}
                    className="mb-6"
                    value={userName}
                    setValue={setUserName}
                />
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong Password"
                    value={password}
                    setValue={setPassword}
                />
                <div className="w-full flex justify-between items-center space-x-4">
                    <TextInputs
                        label="firstName"
                        placeholder="Enter a firstName"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInputs
                        label="lastName"
                        placeholder="Enter a lastName"
                        className="my-6"
                        value={lastName}
                        setValue={setLastName}
                    />
                </div>
                <div className="w-full flex items-center justify-center my-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        }}
                    >SIGN UP</button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <diV className="my-6 font-semibold text-lg">
                    Already have an account ?
                </diV>
                <diV className="w-full border border-gray-500 py-4 rounded-full items-center justify-center flex text-gray-500 font-bold">
                    <Link to="/login">
                        LOG IN INSTEAD
                    </Link>
                </diV>

            </div>

            <NotificationContainer />
        </diV>
    )
}


export default SignupComponent;