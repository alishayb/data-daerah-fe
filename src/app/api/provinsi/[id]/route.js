import { API } from "@/commons/utils/environment";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params

  const res = await fetch(`${API}/provinsi/${id}`, {
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

export async function DELETE(req, { params }) {
  const { id } = params

  const res = await fetch(`${API}/provinsi/${id}`, {
    method: "DELETE",
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

export async function PUT(req, { params }) {
  const { id } = params
  const newData = await req.json()

  const res = await fetch(`${API}/provinsi/${id}`, {
    method: "PUT",
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

