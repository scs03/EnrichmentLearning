// app/api/auth/login/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { userID, password } = await req.json();

    // Query the database to find the user
    const user = await prisma.credentials.findUnique({
      where: {
        userId: userID,
      },
    });

    // If user not found or password does not match, return error
    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
    }


    // Successful login, return user data or relevant information
    return NextResponse.json({ message: 'user accepted', role: user.role }, { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after request is processed
  }}