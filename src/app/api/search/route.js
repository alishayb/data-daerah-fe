import { API } from "@/commons/utils/environment";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const searchQuery = searchParams.get('searchQuery')

  const res = await fetch(`${API}/search/${searchQuery}`, {
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
