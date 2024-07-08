"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("Submitting ID Number:", userID);
  console.log("Submitting Password:", password);

  try {
    const response = await axios.post('/api/auth/login', { userID, password });
    console.log("Response:", response.data);
    console.log("Role:", response.data.role);
    if (response.data.role === 'teacher') {
      router.push('/teachers');
    } else if (response.data.role === 'student') {
      router.push('/students');
      console.log("pushed")
    }
  } catch (error) {
    setError(error.response.data.message);
  }
} 

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-base-100">
      <header className="h-24 bg-primary bg-repeat">
        {/* Top design as background */}
        <h1 className='pl-5 font-bold flex text-4xl items-center min-h-full'>FISD. Enrichment Learning</h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-bottom bg-repeat-x" style={{ backgroundImage: "url('/bottom-pattern.svg')" }}>
        <div className="w-96 h-96 text-center -mt-32 p-7 rounded-xl border-2 border-base-100 bg-base-100 shadow-2xl hover:shadow-none">
          <h1 className="text-4xl font-bold">SIGN IN</h1>
          {/* Sign in form */}
          <form className="mt-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ID Number"
              onChange={(event) => setUserID(event.target.value)}
              className="border-primary p-2 rounded w-full max-w-md border-2"
              value={userID}
            />
            <input
              type="password"
              placeholder='Password'
              className='border-primary p-2 rounded w-full max-w-md border-2 mt-5'
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <button type="submit" className="btn border-2 mt-8 w-full p-2 bg-primary border-primary text-white rounded hover:text-black hover:bg-transparent">Login</button>
          </form>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </main>
    </div>
  )
}

export default Login;