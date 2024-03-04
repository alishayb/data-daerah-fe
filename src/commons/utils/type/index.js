const PROVINSI = {
  type: "provinsi",
  name: "Provinsi",
};

const KABUPATEN_KOTA = {
  name: "Kabupaten / Kota",
  type: "kabupaten_kota",
};

const KECAMATAN = {
  name: "Kecamatan",
  type: "kecamatan",
};

export const getType = (tipe) => {
  switch (tipe) {
    case "provinsi":
      return {
        name: PROVINSI.name,
        parent: null,
        child: KABUPATEN_KOTA,
      };

    case "kabupaten_kota":
      return {
        name: KABUPATEN_KOTA.name,
        parent: PROVINSI,
        child: KECAMATAN,
      };

    case "kecamatan":
      return {
        name: KECAMATAN.name,
        parentType: KABUPATEN_KOTA,
        childType: null,
      };

    default:
      break;
  }
};
