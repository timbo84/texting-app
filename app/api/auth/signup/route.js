import bcrypt from 'bcrypt';
import users from '../users'; // Import the shared users array




export async function POST(request) {
    const body = await request.json();
    console.log('Request Body:', body);
  
    const { email, password } = body;
    console.log('Email:', email, 'Password:', password);
  
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'Email and password are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  
    // Duplicate user check
    if (users.find((user) => user.email === email)) {
      return new Response(
        JSON.stringify({ message: 'User already exists' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
  
    console.log('Users Array:', users);
  
    return new Response(
      JSON.stringify({ message: 'User created successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }