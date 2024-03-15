import { sql } from "@vercel/postgres";

export async function createUser(name, email, password) {
  try {
    // Accessing the PostgreSQL database and checking if the email/user already exists
    let existingUser = await sql`SELECT * from users where email=${email}`;
    if (existingUser.rowCount > 0) {
      return { success: false };
    }

    // Hashing the password using pgcrypto's crypt() which is provided by pgcrypto extension in PostgresSQL
    const passwordRow =
      await sql`SELECT crypt(${password}, gen_salt('bf')) as hash`;
    const passwordHash = passwordRow.rows[0]?.hash;

    // Insert the new user into the database
    await sql`INSERT INTO public.users(name, email, password_hash) VALUES (${name}, ${email}, ${passwordHash});`;
    return { success: true };
  } catch (error) {
    console.error("Error occurred while creating the user:", error.message);
    return { success: false };
  }
}
