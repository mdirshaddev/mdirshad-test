import { type JWT } from "next-auth/jwt";
import { verify, sign } from "jsonwebtoken";
import NextAuth, { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { nextPrismaClient } from "src/modules/prisma/prisma-client";

export class NextAuthService {
  public constructor() {}

  public authOptions(): AuthOptions {
    return {
      adapter: PrismaAdapter(nextPrismaClient),
      debug: process.env.NODE_ENV === "development",
      jwt: {
        async decode({ secret, token }) {
          // TODO: Role based control needs to be implemented here
          return verify(token as string, secret) as JWT;
        },
        async encode({ secret, token }) {
          // TODO: Role based control needs to be implemented here
          return sign(token as object, secret, { algorithm: "HS256" });
        },
      },
      providers: [
        // TODO: In plan for future to add multiple providers
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
      ],
      secret: process.env.NEXTAUTH_SECRET,
      session: { strategy: "jwt" },
      theme: {
        colorScheme: "auto",
      },
    };
  }

  public nextAuth() {
    return NextAuth(this.authOptions()) as AuthOptions;
  }
}
