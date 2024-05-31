import request from "./request.ts";

const jsonHeader = { headers: { "Content-Type": "application/json" } }

const reqTest = () => request.get('/test', jsonHeader)

export { reqTest }