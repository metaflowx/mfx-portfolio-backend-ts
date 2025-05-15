import { Elysia } from 'elysia'
import { login } from './login'
import { signup } from './signup'
import {getAdmin} from "./getAdmin";
import { getAllAdmin } from "./allAdmin";
import {  deactivateAdmin} from "./deactivate";


const  xAdminHandlers = new Elysia(
    {
        prefix: '/admin',
        tags: ['Admin Module'],
    }
)
.use(login)
.use(signup)
.use(getAdmin)
.use(getAllAdmin)
.use(deactivateAdmin)



export default xAdminHandlers