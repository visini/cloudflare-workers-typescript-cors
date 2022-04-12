import { JSONResponse, JSONRequestBody } from "../utils"

export const postFoo = async (request: any, env: any): Promise<Response> => {
  const data = {
    hello: "from postFoo",
    requestBodyAsJSON: await JSONRequestBody(request),
  }
  return JSONResponse(data)
}

export const getFoo = async (request: any, env: any): Promise<Response> => {
  const data = { hello: "from getFoo" }
  return JSONResponse(data)
}
