const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://image-aigenerator-server.onrender.com'
    : 'http://localhost:8090';

export default baseURL;
