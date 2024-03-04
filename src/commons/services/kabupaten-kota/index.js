"use server";

import { DOMAIN } from "@/commons/utils/environment";

export async function getKabupatenKotaByID(id) {
  const res = await fetch(`${DOMAIN}/api/kabupaten-kota/${id}`, {
    method: "GET",
  });

  const data = await res.json();
  return data;
}

export async function getAllKabupatenKota() {
  const res = await fetch(`${DOMAIN}/api/kabupaten-kota`, {
    method: "GET",
  });

  const result = await res.json();
  return result.data;
}

export async function createKabupatenKota(newData) {
  const res = await fetch(`${DOMAIN}/api/kabupaten-kota`, {
    method: "POST",
    body: JSON.stringify(newData),
  });

  const result = await res.json();
  return result.data;
}

export async function updateKabupatenKota(id, newData) {
  const res = await fetch(`${DOMAIN}/api/kabupaten-kota/${id}`, {
    method: "PUT",
    body: JSON.stringify(newData),
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}

export async function deleteKabupatenKota(id) {
  const res = await fetch(`${DOMAIN}/api/kabupaten-kota/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}
