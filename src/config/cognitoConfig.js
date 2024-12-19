const userPoolId = import.meta.env.VITE_USER_POOL_ID;
const clientId = import.meta.env.VITE_CLIENT_ID;

const cognitoConfig = {
    UserPoolId: userPoolId,
    ClientId: clientId,
}

export default cognitoConfig;