import request from "./request.ts";

const jsonHeader = { headers: { "Content-Type": "application/json" } }

// 確認是否登入
const reqCheckLogin = () => request.get('/user/isLogin')

// 開始 google oauth2 認證
const reqStartGoogleOauth = () => request.get('/auth/google/start', jsonHeader)

export {
    reqCheckLogin,
    reqStartGoogleOauth }