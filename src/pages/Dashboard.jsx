import { useAuth, AuthService } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BookLoader from "../components/Loader/BookLoader";

function Dashboard() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login");
    }
  }, [auth.isAuthenticated, navigate]);

  if (auth.isLoading){
    return <BookLoader />;
  }

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="text-gray-600">Email:</p>
            <p className="font-medium">{auth.user?.profile.email}</p>
          </div>
          
          <div className="border-b pb-2">
            <p className="text-gray-600">ID Token:</p>
            <p className="font-mono text-sm break-all">{auth.user?.id_token}</p>
          </div>
          
          <div className="border-b pb-2">
            <p className="text-gray-600">Access Token:</p>
            <p className="font-mono text-sm break-all">{auth.user?.access_token}</p>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => AuthService.signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;