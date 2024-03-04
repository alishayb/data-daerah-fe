import { API } from "@/commons/utils/environment";
import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch(`${API}/provinsi`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json({ message: res.message });
  }

  return NextResponse.json({ data });
}

export async function POST(req) {
  const newData = await req.json()

  const res = await fetch(`${API}/provinsi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
    cache: "no-store",
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json({ message: res.message });
  }

  return NextResponse.json({ data });
}
