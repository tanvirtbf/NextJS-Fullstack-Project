import { NextResponse } from "next/server";
import DBConnect from "@/app/mongodb/DBConnection";

export async function GET(req,res){
  await DBConnect();
  return NextResponse.json({message:'Testing Api'})
}