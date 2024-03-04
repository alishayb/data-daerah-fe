import DeleteSection from "@/commons/sections/delete/DeleteSection";
import { getDataByType } from "@/commons/services/search";

export default async function DeleteData({ params }) {
  const { id, tipe } = params;
  const data = await getDataByType(tipe, id);

  return (
    <main className="w-full p-8 space-y-8 text-center">
      <div className="space-y-2">
        <h1 className="text-slate-900 font-bold text-2xl">
          Hapus Data: {data.nama}
        </h1>
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
      </div>

      <DeleteSection data={data} tipe={tipe} />
    </main>
  );
}
