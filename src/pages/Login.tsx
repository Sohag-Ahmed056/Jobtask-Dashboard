// pages/Login.tsx
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "../redux/features/auth";
import { setCredentials } from "../redux/features/authslice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, { isLoading, error }] = useUserLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const result = await userLogin({ email, password }).unwrap();

      // ✅ Saves token to cookie via Redux action
      dispatch(setCredentials({ token: result.token, user: result.user }));

      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
        
        <input name="email" type="email" placeholder="Email" required className="w-full border rounded-lg px-4 py-2" />
        <input name="password" type="password" placeholder="Password" required className="w-full border rounded-lg px-4 py-2" />
        <button type="submit" disabled={isLoading} className="w-full bg-[#0D3B2E] text-white py-2.5 rounded-full font-bold">
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;