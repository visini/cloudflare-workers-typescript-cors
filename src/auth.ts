import { JSONResponse } from "./utils"

export const auth = async (Handler: any, request: any, env: any) => {
  let API_KEY = ""
  try {
    API_KEY = (await env.TEST_NAMESPACE.get("_API_KEY")) || ""
  } catch (error) {
    console.info("_API_KEY could not be retrieved from worker KV")
    return JSONResponse({ error: "Internal Server Error" }, { status: 500 })
  }
  const { headers } = request
  const headerApiKey = headers.get("X-API-KEY") || ""
  if (!API_KEY || !headerApiKey || headerApiKey !== API_KEY) {
    console.info("LOG headers =", headers)
    ;["url", "method", "query"].forEach((k) => {
      console.info(`LOG request.${k} =`, request[k])
    })
    return JSONResponse({ error: "Not Authenticated" }, { status: 401 })
  }
  return await Handler(request, env)
}
