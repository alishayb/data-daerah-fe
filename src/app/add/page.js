import FormTipeData from "@/commons/sections/form/FormTipeData";
import { getAllKabupatenKota } from "@/commons/services/kabupaten-kota";
import { getAllProvinsi } from "@/commons/services/provinsi";

export default async function AddData() {
  const listProvinsi = await getAllProvinsi();
  const listKabupatenKota = await getAllKabupatenKota();

  return (
    <main className="w-full p-8 space-y-8">
      <h1 className="text-slate-900 font-bold text-2xl">Add New Data</h1>

      <FormTipeData
        listProvinsi={listProvinsi}
        listKabupatenKota={listKabupatenKota}
      />
    </main>
  );
}
