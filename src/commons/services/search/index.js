"use server";

import { DOMAIN } from "@/commons/utils/environment";

import { getKabupatenKotaByID } from "@/commons/services/kabupaten-kota";
import { getKecamatanByID } from "@/commons/services/kecamatan";
import { getProvinsiByID } from "@/commons/services/provinsi";

export async function searchByName(searchQuery) {
  const param = new URLSearchParams({
    searchQuery: searchQuery,
  });

  const res = await fetch(`${DOMAIN}/api/search?${param.toString()}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

export async function getDataByType(tipe, id) {
  let newData = {
    tipeData: tipe,
  };

  switch (tipe) {
    case "provinsi":
      const provResult = await getProvinsiByID(id);
      newData = {
        ...newData,
        tipeChild: "kabupaten_kota",
        ...provResult.data,
      };
      break;

    case "kabupaten_kota":
      const kabKotaResult = await getKabupatenKotaByID(id);
      newData = {
        ...newData,
        tipeParent: "provinsi",
        tipeChild: "kecamatan",
        ...kabKotaResult.data,
      };
      break;

    case "kecamatan":
      const kecResult = await getKecamatanByID(id);
      newData = {
        ...newData,
        tipeParent: "kabupaten_kota",
        ...kecResult.data,
      };
      break;

    default:
      break;
  }

  return newData;
}
