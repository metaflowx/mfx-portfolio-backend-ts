import { Elysia } from 'elysia'
import { login } from './login'
import { signup } from './signup'
import { socialLogin } from './social-login'
import { verifyOtp } from './verifyOtp'
import { resendOtp } from './resendOtp'
import { refreshToken } from './refreshToken'
import { changePassword } from './changePassword'
import { resetPassword } from './resetPassword'


const  xAuthHandlers = new Elysia(
    {
        prefix: '/auth',
        tags: ['Auth Module'],
    }
)
.use(login)
.use(signup)
.use(socialLogin)
.use(verifyOtp)
.use(resendOtp)
.use(refreshToken)
.use(changePassword)
.use(resetPassword)

export default xAuthHandlers