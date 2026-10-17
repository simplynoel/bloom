import { NextResponse, NextRequest } from "next/server";

interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
]

export async function GET () {

    return NextResponse.json({
        success: true,
        data: users
    });
}

export async function POST (request: NextRequest) {
    const body = await request.json();

    const newUser: User = {
        id: users.length +1,
        name: body.name,
    }

    users.push(newUser);
    
    return NextResponse.json({
        success: true,
        message: "User created successfully",
        data: newUser
    },{
        status: 201
    });
}