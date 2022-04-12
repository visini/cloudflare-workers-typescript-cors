import { handleRequest } from "./handler"
import { handleOptions } from "./utils"

export default {
  async fetch(request: Request, env) {
    if (request.method === "OPTIONS") {
      return handleOptions(request)
    } else {
      return handleRequest(request, env)
    }
  },
}
