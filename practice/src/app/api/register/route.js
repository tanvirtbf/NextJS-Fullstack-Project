import { NextResponse } from "next/server";

export async function GET(request, response) {
  return NextResponse.json({
    message: "Get Request Fired",
    data: { firstName: "Tanvir", lastName: "Ahmed", age: 25 },
  });
}

export async function POST(req,res){
  return NextResponse.json({message:'POST Request!'})
}
