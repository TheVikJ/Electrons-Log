const basePath =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1337'
    : 'https://backend.log-of-emin.us'

const authKey = 'auth'
const authBaseRoute = `${basePath}/${authKey}`
export const authRoutes = {
  getUser: `${authBaseRoute}/user`,
  sendOtp: `${authBaseRoute}/sendOTP`,
  verifyOtp: `${authBaseRoute}/verifyOTP`,
  logout: `${authBaseRoute}/logout`,
}
