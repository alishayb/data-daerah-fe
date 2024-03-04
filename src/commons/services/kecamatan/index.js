"use server";

import { DOMAIN } from "@/commons/utils/environment";

export async function getKecamatanByID(id) {
  const res = await fetch(`${DOMAIN}/api/kecamatan/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

export async function createKecamatan(newData) {
  const res = await fetch(`${DOMAIN}/api/kecamatan`, {
    method: "POST",
    body: JSON.stringify(newData),
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}

export async function updateKecamatan(id, newData) {
  const res = await fetch(`${DOMAIN}/api/kecamatan/${id}`, {
    method: "PUT",
    body: JSON.stringify(newData),
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}

export async function deleteKecamatan(id) {
  const res = await fetch(`${DOMAIN}/api/kecamatan/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });

  const result = await res.json();
  return result.data;
}
