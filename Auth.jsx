import { useState } from "react";
import LoginImage from '../Assets/loginimage.png';
import Logo from '../Assets/lifelink.jpg';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="flex container mx-auto">
            <div className="w-2/4 h-2/3 items-center">
                <img src={LoginImage} alt="man behind ambulance" />
            </div>
            <div className="py-44 relative my-28">
                <div className="w-2/4 absolute left-40 top-6">
                    <img className="w-full " src={Logo} alt="Logo-image" />
                </div>
                <div className="mx-28 rounded-md shadow-xl">
                    <h1 className="text-3xl font-bold mb-5 text-center mt-11">{isSignUp ? "Sign Up" : "Login"}</h1>
                    <form className="text-center">
                        {isSignUp && <input type="text" placeholder="Your Name" className="border-2 rounded p-2 mb-4 w-3/4 hover:shadow-md hover:shadow-blue-500" />}
                        <input type="email" placeholder="Your Email" className="border-2 rounded p-2 mb-4 w-3/4 hover:shadow-md hover:shadow-blue-500" />
                        <input type="password" placeholder="Your Password" className="border-2 rounded p-2 mb-4 w-3/4 hover:shadow-md hover:shadow-blue-500" />
                        <div className="text-center mt-11">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium w-3/4">{isSignUp ? "Sign Up" : "Login"}</button>
                        </div>

                    </form>
                    <div className="text-center">
                        <button className="mt-4 text-blue-600 mb-11" onClick={toggleAuthMode}>
                            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Auth;