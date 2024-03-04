"use server";

import { DOMAIN } from "@/commons/utils/environment";

export async function getProvinsiByID(id) {
  const res = await fetch(`${DOMAIN}/api/provinsi/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

export async function getAllProvinsi() {
  const res = await fetch(`${DOMAIN}/api/provinsi`, {
    method: "GET",
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}

export async function createProvinsi(newData) {
  const res = await fetch(`${DOMAIN}/api/provinsi`, {
    method: "POST",
    body: JSON.stringify(newData),
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}

export async function updateProvinsi(id, newData) {
  const res = await fetch(`${DOMAIN}/api/provinsi/${id}`, {
    method: "PUT",
    body: JSON.stringify(newData),
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}

export async function deleteProvinsi(id) {
  const res = await fetch(`${DOMAIN}/api/provinsi/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}
