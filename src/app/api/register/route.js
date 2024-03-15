import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

//Define the isValidEmail()
function isValidEmail(email) {
  // Regular expression pattern for validating email addresses
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  return emailPattern.test(email);
}

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    //Validate email format
    if (!isValidEmail(email)) {
      return NextResponse(
        {
          message: "Invalid email format.",
        },
        { status: 400 }
      );
    }

    // Accessing the PostgreSQL database and checking if the email/user already exists
    let existingUser = await sql`SELECT * from users where email=${email}`;
    if (existingUser.rowCount > 0)
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
