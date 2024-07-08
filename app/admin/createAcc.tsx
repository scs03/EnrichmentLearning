"use client";
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('/api/admin/create-user', {
        userId,
        password,
        role,
        name,
        subject,
        grade
      });
      alert('User created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating user');
    }
  };

  return (
    <div className='p-5 border'>
        <>
        <h1 className='underline py-2 text-xl font-semibold'>Create Account</h1>
        </>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
        </select>
        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        {role === 'teacher' && (
            <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            />
        )}
        {role === 'student' && (
            <input
            type="number"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            required
            />
        )}
        <button type="submit">Create User</button>
        </form>
    <>
    <h1>need to create delete option in mass and single</h1> 
    </>
    </div>
    
  );
};

export default CreateUser;