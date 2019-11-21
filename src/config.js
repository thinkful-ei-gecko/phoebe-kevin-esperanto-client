export default {
  REACT_APP_API_ENDPOINT:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_ENDPOINT
      : 'http://localhost:8000/api',
  TOKEN_KEY: 'esperanto-client-auth-token',
};