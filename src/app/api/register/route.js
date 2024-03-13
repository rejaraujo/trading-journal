import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    return NextResponse.json({ message: "user registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering the user.",
      },
      { status: 500 }
    );
  }
}
