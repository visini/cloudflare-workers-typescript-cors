import { Router } from "itty-router"

import { getFoo, postFoo } from "./handlers/foo"
import { JSONResponse } from "./utils"
import { auth } from "./auth"

const router = Router()

router
  .get("/", (request, env) => new Response("Hello worker!"))
  .get("/foo", async (request, env) => await auth(getFoo, request, env))
  .post("/foo", async (request, env) => await auth(postFoo, request, env))
  .all("/*", (request, env) =>
    JSONResponse({ error: "Not Found" }, { status: 404 })
  )

export const handleRequest = (request: any, env: any) => {
  return router
    .handle(request, env)
    .then((response) => response)
    .catch((error) => {
      console.info(error)
      return JSONResponse({ error: "Internal Server Error" }, { status: 500 })
    })
}
