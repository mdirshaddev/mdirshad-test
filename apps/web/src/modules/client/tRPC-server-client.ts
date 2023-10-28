import { httpBatchLink } from "@trpc/client";

import { appRouter } from "src/modules/server";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
