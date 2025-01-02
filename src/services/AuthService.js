import { AuthProvider, useAuth } from "react-oidc-context";

class AuthService {
  static getConfig() {
    return {
      authority: `https://cognito-idp.${import.meta.env.VITE_COGNITO_REGION}.amazonaws.com/${import.meta.env.VITE_USER_POOL_ID}`,
      client_id: import.meta.env.VITE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      response_type: "code",
      scope: "phone openid email",
    };
  }

  static signOut() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_LOGOUT_URI;
    const cognitoDomain = import.meta.env.VITE_AUTH_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  }
}

export { AuthService, AuthProvider, useAuth };