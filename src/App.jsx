import { Toaster } from "sonner";
import AppRouter from "./router";
import { AuthWrapper } from "./components/auth/AuthWrapper";

function App() {
  return (
    <AuthWrapper>
      <AppRouter />
      <Toaster position="bottom-right" richColors />
    </AuthWrapper>
  );
}

export default App;