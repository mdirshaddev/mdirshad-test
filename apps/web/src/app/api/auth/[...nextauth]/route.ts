import NextAuth, { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { nextPrismaClient } from "src/modules/prisma/prisma-client";

/* The code is defining an object named `authOptions` with the type `AuthOptions`. This object is used
to configure the authentication options for NextAuth. */
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(nextPrismaClient),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  debug: process.env.NODE_ENV === "development",
  theme: {
    colorScheme: "auto",
  },
};

const handler: typeof NextAuth = NextAuth(authOptions);

export { handler as GET, handler as POST };
