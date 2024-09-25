import { NextResponse } from "next/server";

export async function GET(req,res){
  return NextResponse.json({message:'Get Request'})
}

export async function POST(req,res){
  const body = await req.json()
  console.log(body)
  return NextResponse.json({message:'Post Request', body:body,})
}

export async function PUT(req,res){
  const body = await req.json()
  return NextResponse.json({message:body})
}

export async function PATCH(req,res){
  const body = await req.json()
  return NextResponse.json({message:body})
}

export async function DELETE(req,res){
  const body = await req.json()
  return NextResponse.json({message:body})
}