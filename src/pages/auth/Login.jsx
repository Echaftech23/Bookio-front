import { useAuth } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BookLoader from "../../components/Loader/BookLoader";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // if (auth.isAuthenticated) {
    //   navigate("/dashboard");
    // } else {
    //   auth.signinRedirect();
    // }
    auth.signinRedirect();

    console.log('is auth', auth.isAuthenticated);
  }, [auth.isAuthenticated, navigate, auth]);

  if (auth.isLoading) {
    return <BookLoader />;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  return null;
}

export default Login;