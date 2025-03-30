import bcrypt from 'bcrypt';
import users from '../users'; // Import the shared users array


export async function POST(request) {
    const { email, password } = await request.json();
  
    // Find the user by email
    const user = users.find((user) => user.email === email);
    if (!user) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  
    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  
    return new Response(
      JSON.stringify({ message: 'Logged in successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }