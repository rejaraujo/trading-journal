import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import { authenticateUser } from "../../../../../lib/postgres";
import { sql } from "@vercel/postgres";

async function authenticateUser(email, password) {
  try {
    const result =
      await sql`SELECT password_hash, name FROM users WHERE email = ${email}`;

    const user = result.rows[0];

    if (!user) {
      return { error: "User not found" };
    }

    const { password_hash, name } = user;

    const userTypedHashedPassword =
      await sql`SELECT crypt(${password}, ${password_hash}) AS hashed_password`;

    if (userTypedHashedPassword.rows[0]?.hashed_password === password_hash) {
      return { email, name }; // Include name in the return object
    } else {
      return { error: "Incorrect Credentials" };
    }
  } catch (error) {
    console.error("Error authenticating user:", error.message);
    throw error;
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        //   email: { label: "email", type: "email" },
        //   password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const result = await authenticateUser(email, password);
        if (result.error) {
          throw new Error(result.error);
        } else {
          return result;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
