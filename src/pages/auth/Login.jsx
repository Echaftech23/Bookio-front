import { useAuth } from "../../services/AuthService";
import BookLoader from "../../components/Loader/BookLoader";

function Login() {
  const auth = useAuth();

  auth.signinRedirect();

  if (auth.isLoading) {
    return <BookLoader />;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  return null;
}

export default Login;