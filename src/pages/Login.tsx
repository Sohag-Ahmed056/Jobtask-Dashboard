import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "../redux/features/auth";
import { setCredentials } from "../redux/features/authslice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null); 

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      
      const result = await userLogin({ email, password }).unwrap();

   
      dispatch(setCredentials({ token: result.token, user: result.user }));

      navigate("/dashboard");
    } catch (err: any) {
      console.error("Login failed:", err);
      
     
      const errorMsg = err?.data?.message || "Invalid email or password. Please try again.";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
          <p className="text-sm text-gray-500">Enter your credentials to continue</p>
        </div>

        
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
            {errorMessage}
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              name="email" 
              type="email" 
              placeholder="name@company.com" 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0D3B2E] outline-none transition-all" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              name="password" 
              type="password" 
              placeholder="••••••••" 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0D3B2E] outline-none transition-all" 
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          className="w-full bg-[#0D3B2E] hover:bg-[#1a5a48] disabled:bg-gray-400 text-white py-2.5 rounded-full font-bold transition-colors mt-2"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Signing in...
            </span>
          ) : "Sign In"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account? <span className="text-[#0D3B2E] font-semibold cursor-pointer hover:underline">Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;