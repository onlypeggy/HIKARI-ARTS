import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    service: "hikari-arts",
    status: "ok",
  });
}

