import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Accessing the PostgreSQL database and checking if the email already exists
    let users = await sql`SELECT * from users where email=${email}`;
    if (users.rowCount > 0)
      return NextResponse.json(
        {
          message: "Email already registered for another user.",
        },
        { status: 500 }
      );

    // Hashing the password using pgcrypto's crypt() which is provided by pgcrypto extension in PostgresSQL
    const passwordRow =
      await sql`SELECT crypt(${password}, gen_salt('bf')) as hash`;
    const passwordHash = passwordRow.rows[0]?.hash;

    // If it doesn't exist I will insert the new user.
    await sql`INSERT INTO public.users(name, email, password_hash) VALUES (${name}, ${email}, ${passwordHash});`;

    //Return success response
    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred while registering the user:", error.message);
    return NextResponse.json(
      {
        message: "An error occurred while registering the user.",
      },
      { status: 500 }
    );
  }
}
