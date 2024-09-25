import { NextResponse } from "next/server";

export async function GET(request, response) {
  return NextResponse.json({
    message: "Get Request Fired",
    data: { firstName: "Tanvir", lastName: "Ahmed", age: 25 },
  });
}

export async function POST(req,res){
  const body = await req.json()
  return NextResponse.json({email: body.email})
}

export async function DELETE(req,res){
  const body = await req.json()
  return NextResponse.json({email: body.email})
}
