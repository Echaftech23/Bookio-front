import { AuthProvider, useAuth } from "react-oidc-context";

class AuthService {
  static getConfig() {
    return {
      authority: `https://cognito-idp.eu-north-1.amazonaws.com/${import.meta.env.VITE_USER_POOL_ID}`,
      client_id: import.meta.env.VITE_CLIENT_ID,
      redirect_uri: "http://localhost:5173/",
      response_type: "code",
      scope: "email openid phone",
    };
  }

  static signOut() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const logoutUri = "http://localhost:5173/login";
    const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  }
}

export { AuthService, AuthProvider, useAuth };