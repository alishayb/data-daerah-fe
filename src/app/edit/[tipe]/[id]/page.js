import FormKabupatenKota from "@/commons/sections/form/FormKabupatenKota";
import FormKecamatan from "@/commons/sections/form/FormKecamatan";
import FormProvinsi from "@/commons/sections/form/FormProvinsi";
import { getAllKabupatenKota } from "@/commons/services/kabupaten-kota";
import { getAllProvinsi } from "@/commons/services/provinsi";
import { getDataByType } from "@/commons/services/search";

export default async function EditData({ params }) {
  const { id, tipe } = params;
  const data = await getDataByType(tipe, id);

  const listProvinsi = await getAllProvinsi();
  const listKabupatenKota = await getAllKabupatenKota();

  return (
    <main className="w-full p-8 space-y-8">
      <h1 className="text-slate-900 font-bold text-2xl">Edit Data</h1>

      {tipe === "provinsi" && (
        <FormProvinsi
          initValue={{ nama: data.nama }}
          idData={data.id}
          isUpdate={true}
        />
      )}
      {tipe === "kabupaten_kota" && (
        <FormKabupatenKota
          listProvinsi={listProvinsi}
          initValue={{
            id_prov: data.id_prov,
            nama: data.nama,
            tipe: data.tipe,
          }}
          idData={data.id}
          isUpdate={true}
        />
      )}
      {tipe === "kecamatan" && (
        <FormKecamatan
          listKabupatenKota={listKabupatenKota}
          initValue={{
            id_kab: data.id_kab,
            nama: data.nama,
            luas_area: data.luas_area,
          }}
          idData={data.id}
          isUpdate={true}
        />
      )}
    </main>
  );
}
