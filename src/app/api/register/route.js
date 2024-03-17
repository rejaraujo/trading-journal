import { NextResponse } from "next/server";
import { createUser } from "../../../../lib/postgres";
import { isValidEmail } from "../../../../lib/validation";

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
    //Create a user in PostgresSQL DB
    const result = await createUser(name, email, password);

    // Check if user was successfully created
    if (result.success) {
      return NextResponse.json(
        { message: "User registered successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Email already registered for another user.",
        },
        { status: 500 }
      );
    }
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
