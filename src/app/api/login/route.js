// import { sql, query } from "@vercel/postgres";

// async function authenticateUser(email, password) {
//   try {
//     // Retrieve the hashed password from the database for the given email
//     const result = await query(
//       sql`SELECT password_hash FROM users WHERE email = ${email}`
//     );
//     const hashedPassword = result.rows[0]?.password_hash;

//     // Hash the user-typed password using the same salt as stored in the database
//     const userTypedHashedPassword = await query(
//       sql`SELECT crypt(${password}, ${hashedPassword}) AS hashed_password`
//     );

//     // Compare the user-typed hashed password with the stored hashed password
//     if (userTypedHashedPassword.rows[0]?.hashed_password === hashedPassword) {
//       // Passwords match
//       return true;
//     } else {
//       // Passwords do not match
//       return false;
//     }
//   } catch (error) {
//     console.error("Error authenticating user:", error.message);
//     throw error;
//   }
// }

// // Example usage
// async function main() {
//   try {
//     const isAuthenticated = await authenticateUser(
//       "user@example.com",
//       "password123"
//     );
//     if (isAuthenticated) {
//       console.log("User authenticated successfully.");
//     } else {
//       console.log("Authentication failed. Invalid email or password.");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }

// main();
