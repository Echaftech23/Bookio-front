// src/components/auth/AuthWrapper.jsx
import { AuthProvider, AuthService } from "../../services/AuthService";

export const AuthWrapper = ({ children }) => {
  return (
    <AuthProvider {...AuthService.getConfig()}>
      {children}
    </AuthProvider>
  );
};