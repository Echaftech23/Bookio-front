import { useAuth } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }

    console.log('is auth',auth.isAuthenticated);
    
  }, [auth.isAuthenticated, navigate]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  console.log('is auth',auth.isAuthenticated);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={() => auth.signinRedirect()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sign in with Cognito
      </button>
    </div>
  );
}

export default Login;