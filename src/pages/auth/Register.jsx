// src/pages/auth/Register.jsx
import { useAuth } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={() => auth.signinRedirect()}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Register with Cognito
      </button>
    </div>
  );
}

export default Register;