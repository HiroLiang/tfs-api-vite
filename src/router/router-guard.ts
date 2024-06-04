import router from "./index.ts";
import { reqCheckLogin } from "../api/auth-api.ts";

const withoutLogin: string[] = ['home', 'login']

router.beforeEach(async (to, from, next) => {
    if (!withoutLogin.includes(<string>to.name)) {
        if (!await isLogin()) {
            next({name: "login"})
        } else {
            next()
        }
    } else {
        next()
    }
    if(from.name === "home") {}
})

router.afterEach(() => {

})

const isLogin = async (): Promise<boolean> => {
    let checkLogin: string = (await reqCheckLogin()).data;
    return checkLogin === 'Y'
}

export default router;