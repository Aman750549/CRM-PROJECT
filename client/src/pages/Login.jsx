import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const login = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        try {

            setLoading(true);

            const res = await API.post("/auth/login", {
                email,
                password
            });


            // Save token
            localStorage.setItem(
                "token",
                res.data.token
            );


            // Save user details for RBAC
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );


            navigate("/dashboard");


        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* Logo / Brand */}

                <div className="text-center mb-8">

                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl shadow-sm mb-4">

                        <span className="text-white text-2xl font-bold">
                            C
                        </span>

                    </div>


                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h1>


                    <p className="text-gray-500 mt-2">
                        Sign in to your CRM account
                    </p>

                </div>


                {/* Login Card */}

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

                    <form onSubmit={login}>

                        {/* Email */}

                        <div className="mb-5">

                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>


                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                autoComplete="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />

                        </div>


                        {/* Password */}

                        <div className="mb-6">

                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>


                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                autoComplete="current-password"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />

                        </div>


                        {/* Login Button */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition"
                        >

                            {loading ? "Signing in..." : "Sign In"}

                        </button>

                    </form>

                </div>


                {/* Footer */}

                <p className="text-center text-sm text-gray-400 mt-6">
                    CRM Management System
                </p>

            </div>

        </div>

    );

}

export default Login;