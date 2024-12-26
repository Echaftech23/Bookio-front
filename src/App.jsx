import { AuthWrapper } from "./components/auth/AuthWrapper";
import AppRouter from "./router";

function App() {
  return (
    <AuthWrapper>
      <AppRouter />
    </AuthWrapper>
  );
}

export default App;